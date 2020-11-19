'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        uuid: uuid.v4(),
        name: 'Ayn Rand',
        email: 'purecapitalism@freemarket.com',
        pwd: 'hellokitty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuid.v4(),
        name: 'Albert Camus',
        email: 'rollingstones@absurd.com',
        pwd: 'hellokitty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuid.v4(),
        name: 'Diogenes',
        email: 'thatbarrelguy@athens.com',
        pwd: 'hellokitty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuid.v4(),
        name: 'Friedrich Nietzsche',
        email: 'mommysboy@slip.com',
        pwd: 'hellokitty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuid.v4(),
        name: 'Marcus Aurelius',
        email: 'emperor@romanempire.com',
        pwd: 'hellokitty',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
}
