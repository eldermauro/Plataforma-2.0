'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lote_final extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lote_final.init({
    produto: DataTypes.STRING,
    quantidade: DataTypes.FLOAT,
    extrativistas: DataTypes.STRING,
    local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lote_final',
  });
  return lote_final;
};