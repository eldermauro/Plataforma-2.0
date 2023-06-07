'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funcionarios.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    comunidade: DataTypes.STRING,
    funcao: DataTypes.STRING,
    valor_hora: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Funcionarios',
  });
  return Funcionarios;
};