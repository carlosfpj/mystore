const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class OrderService {
  constructor(){}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      //que incluya la asociación customer
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        //otra forma de incluir otra asociación llamada 'items'
        'items'
      ]
    });
    return order;
  }
}

module.exports = OrderService;
