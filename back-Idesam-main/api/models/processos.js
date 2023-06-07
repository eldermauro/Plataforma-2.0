'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Processos.init({
    Lote_de_entrada: DataTypes.INTEGER,
    Finalizado: DataTypes.BOOLEAN,
    Quantidade_de_entrada: DataTypes.FLOAT,
    Higenizacao_selecao: DataTypes.BOOLEAN,
    Secagem: DataTypes.BOOLEAN,
    Despolpa: DataTypes.BOOLEAN,
    Refrigeracao: DataTypes.BOOLEAN,
    Destilacao: DataTypes.BOOLEAN,
    Quebra_de_sementes: DataTypes.BOOLEAN,
    Selecao_de_amendoas: DataTypes.BOOLEAN,
    Trituracao: DataTypes.BOOLEAN,
    Prensagem: DataTypes.BOOLEAN,
    Filtragem: DataTypes.BOOLEAN,
    Envase: DataTypes.BOOLEAN,
    selecao_primaria: DataTypes.BOOLEAN,
    extrativistas: DataTypes.STRING,
    locais: DataTypes.STRING,
    processo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Processos',
  });
  return Processos;
};