

const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const service = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories)
  }catch(error) {
    next(error);
  }
});

router.get('/:categoryId/products/:productsId',
  (req, res) => {
    const { categoryId, productsId } = req.params;
    res.json({
      categoryId,
      productsId,
    })
  }
);



module.exports = router;
