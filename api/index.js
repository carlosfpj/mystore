const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')
const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['http://127.0.0.1:5500', 'http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(express.json());
app.use(cors(options)); //ojo la posición del cors
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/api', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('hola soy nueva ruta de mi server en express');
});

app.listen(port, () => {
  console.log('escuchando en mi puerto ' + port);
});
