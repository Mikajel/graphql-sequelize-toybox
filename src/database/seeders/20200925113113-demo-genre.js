'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genre', [
      {
        uuid: 1,
        name: 'horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 2,
        name: 'fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 3,
        name: 'drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 4,
        name: 'romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 5,
        name: 'thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 6,
        name: 'detective',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 7,
        name: 'NSFW',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genre', null, {})
  }
}
