'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ferramentas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ferramentas.init({
    nome: DataTypes.STRING,
    data_aquisicao: DataTypes.DATE,
    valor: DataTypes.FLOAT,
    vida_util: DataTypes.FLOAT,
    depreciacao_anual: DataTypes.FLOAT,
    depreciacao_dia: DataTypes.FLOAT,
    dias_utilizados: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ferramentas',
  });
  return Ferramentas;
};