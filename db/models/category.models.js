const {Model, DataTypes, Sequelize} = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class Category extends Model {

  associate(models) {
    //aqui estamos diciendo que UNA categoría
    //puede tener MUCHOS productos
    this.hasMany(models.Product, {
      //aqui le damos el ALIAS para resolverlo
      //cuando necesitemos que esté de forma anidada
      //y colocamos la foreignKey para que sequelize sepa
      //como resolver el modelo
      as: 'products', foreignKey:'categoryId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}

module.exports = {Category, CategorySchema, CATEGORY_TABLE };
