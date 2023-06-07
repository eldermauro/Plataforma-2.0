'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coletas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_entrada: {
        type: Sequelize.DATE
      },
      materia_prima: {
        type: Sequelize.STRING
      },
      extrativista: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.FLOAT
      },
      valor_pago: {
        type: Sequelize.FLOAT
      },
      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Coletas');
  }
};