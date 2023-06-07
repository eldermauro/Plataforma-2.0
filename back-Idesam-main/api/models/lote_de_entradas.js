'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lote_de_entradas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lote_de_entradas.init({
    materia_prima: DataTypes.STRING,
    extrativista: DataTypes.STRING,
    local: DataTypes.STRING,
    quantidade: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Lote_de_entradas',
  });
  return Lote_de_entradas;
};