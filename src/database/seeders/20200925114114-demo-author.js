'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('author', [
      {
        uuid: 1,
        name: 'Benedict V',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 2,
        name: 'Paschal II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 3,
        name: 'Honorius II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 4,
        name: 'Lucius III',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 5,
        name: 'Nicholas IV',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('author', null, {})
  }
}
