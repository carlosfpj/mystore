'use strict';
//Para generar este archivo es necesario correr npm run migration:generate definido en el package.json
const { userSchema, USER_TABLE} = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', userSchema.role);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  }
};

//una vez definida la migración, se corre mediante npm run migrations:run
//definido en el package.json
