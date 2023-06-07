'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedidos.init({
    empresa: DataTypes.STRING,
    produto: DataTypes.STRING,
    quantidade: DataTypes.FLOAT,
    preco: DataTypes.FLOAT,
    entrega: DataTypes.DATE,
    finalizado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};