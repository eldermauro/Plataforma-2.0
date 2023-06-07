'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ferramentas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      data_aquisicao: {
        type: Sequelize.DATE
      },
      valor: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Ferramentas');
  }
};