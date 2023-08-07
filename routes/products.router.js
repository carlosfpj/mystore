const express = require('express');
const router = express.Router()
const ProductsService = require('./../services/product.service');
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if(id === '999') {
    res.status(404).json({
      message: "no se encontró esa verga"
    })
  } else {
    res.status(200).json({
      id,
      name: 'product 2',
      price: 1500
    })
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  })
})

router.patch('/:id', (req, res) => {
  const id = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params;
  res.json({
    message: 'delete',
    id,
  })
})

module.exports = router;
