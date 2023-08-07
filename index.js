const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
  res.send('hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy nueva ruta de mi server en express');
})

app.listen(port, () => {
  console.log('escuchando en mi puerto ' + port);
})
