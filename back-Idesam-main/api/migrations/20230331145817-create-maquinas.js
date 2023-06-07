'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Maquinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      tipo_processo: {
        type: Sequelize.STRING
      },
      fonte_energia: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.FLOAT
      },
      data_aquisicao: {
        type: Sequelize.DATE
      },
      vida_util: {
        type: Sequelize.FLOAT
      },
      depreciacao_anual: {
        type: Sequelize.FLOAT
      },
      depreciacao_dia: {
        type: Sequelize.FLOAT
      },
      dias_utilizados: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Maquinas');
  }
};