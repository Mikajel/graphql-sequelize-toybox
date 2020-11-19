'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('book', [
      {
        uuid: 1,
        name: 'Sea men',
        year: 1984,
        authorUuid: 5,
        genreUuid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 2,
        name: 'Strange life of a vacation coder',
        year: 1687,
        authorUuid: 2,
        genreUuid: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 3,
        name: 'Seeding and why it takes too long',
        year: 2021,
        authorUuid: 2,
        genreUuid: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 4,
        name: 'Faker 101 - art of not doing manual seeds like an idiot',
        year: 2019,
        authorUuid: 4,
        genreUuid: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 5,
        name: 'Coming up with funny people names',
        year: 2020,
        authorUuid: 2,
        genreUuid: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 6,
        name: 'I have no mouth and I must scream',
        year: 1999,
        authorUuid: 1,
        genreUuid: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 7,
        name: 'Harry Potter and my vanishing will to live',
        year: 2012,
        authorUuid: 4,
        genreUuid: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 8,
        name: 'The last book',
        year: 1984,
        authorUuid: 1,
        genreUuid: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('book', null, {})
  }
}
