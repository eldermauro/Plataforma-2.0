'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Processos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Lote_de_entrada: {
        type: Sequelize.INTEGER
      },
      Finalizado: {
        type: Sequelize.BOOLEAN
      },
      Quantidade_de_entrada: {
        type: Sequelize.FLOAT
      },
      Higenizacao_selecao: {
        type: Sequelize.BOOLEAN
      },
      Secagem: {
        type: Sequelize.BOOLEAN
      },
      Despolpa: {
        type: Sequelize.BOOLEAN
      },
      Refrigeracao: {
        type: Sequelize.BOOLEAN
      },
      Destilacao: {
        type: Sequelize.BOOLEAN
      },
      Quebra_de_sementes: {
        type: Sequelize.BOOLEAN
      },
      Selecao_de_amendoas: {
        type: Sequelize.BOOLEAN
      },
      Trituracao: {
        type: Sequelize.BOOLEAN
      },
      Prensagem: {
        type: Sequelize.BOOLEAN
      },
      Filtragem: {
        type: Sequelize.BOOLEAN
      },
      Envase: {
        type: Sequelize.BOOLEAN
      },
      selecao_primaria: {
        type: Sequelize.BOOLEAN
      },
      extrativistas: {
        type: Sequelize.STRING
      },
      locais: {
        type: Sequelize.STRING
      },
      processo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Processos');
  }
};