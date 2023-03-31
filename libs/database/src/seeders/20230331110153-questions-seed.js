'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   questions: [
    // intended for clients
{ question: 'How satisfied are you with the final outcome of the project?', response_type: 'numeric', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'How responsive was our team to your needs throughout the project?', response_type: 'numeric', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'How would you rate the quality of the deliverables?', response_type: 'numeric', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Did we adhere to the agreed-upon project timeline and budget?', response_type: 'numeric', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Would you recommend us to others?', response_type: 'numeric', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Did we communicate effectively about any issues or delays that arose during the project?', response_type: 'numeric', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'How clear and effective was the communication between you and our team?', response_type: 'string', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'How did our team handle unexpected challenges or changes during the project?', response_type: 'string', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Was there anything that you wished we had done differently during the project?', response_type: 'string', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Are there any other comments you\'d like us to knew Date() about?', response_type: 'string', intended_for: 'clients', created_by: 1, created_at: new Date(), updated_at: new Date() },
         // intended_for: 'teammates'
      { question: 'How satisfied were you with your work environment during the project?', response_type: 'numeric', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'How clear and effective was the communication from your supervisor?', response_type: 'numeric', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Were project goals and expectations clear and well-defined?', response_type: 'numeric', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'How well did you manage your workload during the project?', response_type: 'numeric', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Did you feel like you had opportunities for professional development during the project?', response_type: 'string', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Did you feel like you worked collaboratively with your colleagues?', response_type: 'string', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Did you feel like you received sufficient support and resources to complete your tasks during the project?', response_type: 'string', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'Were there any areas where you felt like you could have improved your performance during the project?', response_type: 'string', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'What suggestions would you have for improving team communication or collaboration in future projects?', response_type: 'string', intended_for: 'teammates', created_by: 1, created_at: new Date(), updated_at: new Date() },
  ],
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', this.questions, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {})
  }
};

