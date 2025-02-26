'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('ContactForms', 'telefono', {
      type: Sequelize.STRING,
      allowNull: true, // Cambia a false si quieres que sea obligatorio
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('ContactForms', 'telefono');
  }
};