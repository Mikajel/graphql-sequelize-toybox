'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookHistory', [
      {
        uuid: 1,
        bookUuid: 1,
        name: 'Sea men',
        year: 1984,
        authorUuid: 5,
        genreUuid: 1,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 2,
        bookUuid: 2,
        name: 'Strange life of a vacation coder',
        year: 1687,
        authorUuid: 2,
        genreUuid: 3,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 3,
        bookUuid: 3,
        name: 'Seeding and why it takes too long',
        year: 2021,
        authorUuid: 2,
        genreUuid: 6,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 4,
        bookUuid: 4,
        name: 'Faker 101 - art of not doing manual seeds like an idiot',
        year: 2019,
        authorUuid: 4,
        genreUuid: 2,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 5,
        bookUuid: 5,
        name: 'Coming up with funny people names',
        year: 2020,
        authorUuid: 2,
        genreUuid: 7,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 6,
        bookUuid: 6,
        name: 'I have no mouth and I must scream',
        year: 1999,
        authorUuid: 1,
        genreUuid: 4,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 7,
        bookUuid: 7,
        name: 'Harry Potter and my vanishing will to live',
        year: 2012,
        authorUuid: 4,
        genreUuid: 5,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 8,
        bookUuid: 8,
        name: 'The last book',
        year: 1984,
        authorUuid: 1,
        genreUuid: 2,
        validFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bookHistory', null, {})
  }
}
