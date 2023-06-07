'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coletas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coletas.init({
    data_entrada: DataTypes.DATE,
    materia_prima: DataTypes.STRING,
    extrativista: DataTypes.STRING,
    local: DataTypes.STRING,
    quantidade: DataTypes.FLOAT,
    valor_pago: DataTypes.FLOAT,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Coletas',
  });
  return Coletas;
};