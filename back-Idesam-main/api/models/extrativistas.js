'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Extrativistas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Extrativistas.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    cpf: DataTypes.STRING,
    apelido: DataTypes.STRING,
    comunidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Extrativistas',
  });
  return Extrativistas;
};