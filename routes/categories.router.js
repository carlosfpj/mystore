const express = require('express');

const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createCategorySchema, getCategorySchema, updateCategorySchema} = require('../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories)
  }catch(error) {
    next(error);
  }
});

router.get('/:id',
 validatorHandler(getCategorySchema,
   'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch(error) {
      next(error);
    }
  }
);

router.get('/:categoryId/products/:productsId',
  (req, res) => {
    const { categoryId, productsId } = req.params;
    res.json({
      categoryId,
      productsId,
    })
  }
);

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newCatergory = await service.create(body);
        res.status(201).json(newCatergory);
      } catch (error) {
        next(error);
      }
    }
);

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
)

router.delete('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async(req, res, next) => {
    try {
      const {id} = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
