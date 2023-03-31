'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('questions', 'order')
    await queryInterface.addColumn('question_questionnaire_relations', 'order', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('question_questionnaire_relations', 'order')
    await queryInterface.addColumn('questions', 'order', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    })
  }
};
