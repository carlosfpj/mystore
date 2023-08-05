const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy nueva ruta de mi server en express');
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'product 1',
      price: 1000
    },
    {
      name: 'product 2',
      price: 1500
    }
  ]);
})

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json( {
    id,
    name: 'product 2',
    price: 1500
  })
});

app.get('/users', (req,res) => {
  const {limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('no hay parámetros')
  }
});

app.get('/categories/:categoryId/products/:productsId',
 (req,res) => {
  const {categoryId, productsId} = req.params;
  res.json({
    categoryId,
    productsId,
  })
 })

app.listen(port, () => {
  console.log('escuchando en mi puerto ' + port);
})
