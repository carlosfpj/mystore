const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); //ojo la posición del cors
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy nueva ruta de mi server en express');
});

app.listen(port, () => {
  console.log('escuchando en mi puerto ' + port);
});
