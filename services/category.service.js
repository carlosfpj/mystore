const { models } = require('../libs/sequelize');

class CategoryService {
  constructor(){}

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }
}

module.exports = CategoryService;
