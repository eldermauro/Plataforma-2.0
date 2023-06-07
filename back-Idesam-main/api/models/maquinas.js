'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maquinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Maquinas.init({
    nome: DataTypes.STRING,
    tipo_processo: DataTypes.STRING,
    fonte_energia: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    data_aquisicao: DataTypes.DATE,
    vida_util: DataTypes.FLOAT,
    depreciacao_anual: DataTypes.FLOAT,
    depreciacao_dia: DataTypes.FLOAT,
    dias_utilizados: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Maquinas',
  });
  return Maquinas;
};