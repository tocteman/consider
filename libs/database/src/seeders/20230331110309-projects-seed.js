'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  projects: [{
    id: 1,
    name: 'Bakery Website Redesign',
    description:
      'Redesigning the website for a local bakery to improve online presence and boost sales.',
    status: 'active',
    owner_id: 1,
    start_date: new Date('2023-01-01'),
    end_date: new Date('2023-02-28'),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Fitness App Development',
    description:
      'Creating a mobile app for a fitness center that helps users track their workouts and progress.',
    status: 'active',
    owner_id: 1,
    start_date: new Date('2023-02-15'),
    end_date: new Date('2023-04-30'),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    name: 'E-commerce Platform for Handmade Goods',
    description:
      'Building an e-commerce platform for a startup selling handmade products from local artisans.',
    status: 'draft',
    owner_id: 1,
    start_date: new Date('2023-05-01'),
    end_date: new Date('2023-09-30'),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    name: 'Online Booking System for Hair Salon',
    description:
      'Developing a web-based booking system for a hair salon, including appointment management and payment processing.',
    status: 'active',
    owner_id: 1,
    start_date: new Date('2023-03-01'),
    end_date: new Date('2023-04-15'),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    name: 'Real Estate Listing Website',
    description:
      'Creating a user-friendly website for a real estate agency that showcases property listings and supports lead generation.',
    status: 'archived',
    owner_id: 1,
    start_date: new Date('2022-09-01'),
    end_date: new Date('2022-12-31'),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 6,
    name: 'Restaurant Mobile App',
    description:
      'Developing a mobile app for a restaurant that allows customers to view menus, place orders, and make reservations.',
    status: 'archived',
    owner_id: 1,
    start_date: new Date('2022-06-01'),
    end_date: new Date('2022-08-31'),
    created_at: new Date(),
    updated_at: new Date(),
  },
  ],
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', this.projects, {})
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projects', null, {})
  },
};
