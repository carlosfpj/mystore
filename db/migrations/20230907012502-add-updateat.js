'use strict';
//Para generar este archivo es necesario correr npm run migration:generate definido en el package.json
const { userSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'updated_at', userSchema.updatedAt);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'updated_at');
  }
};
