'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Your seed data
    const now = new Date();
    const seedData = [
      {
        name: 'First Project',
        description: 'It actually works',
        status: 'draft',
        created_at: now,
        updated_at: now,
      },
      // Add more seed data here as needed
    ];

    // Insert seed data into the 'projects' table
    await queryInterface.bulkInsert('projects', seedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seed data from the 'projects' table
    await queryInterface.bulkDelete('projects', null, {});
  },
};

