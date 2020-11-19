import Book from './book'
import Author from './author'
import Genre from './genre'
import db from '..'
const Sequelize = require('sequelize')
const uuid = require('uuid')

class BookHistory extends Sequelize.Model {}

BookHistory.init({
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: uuid.v4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('NOW')
  },
  validTo: {
    type: Sequelize.DATE
  },
  validFrom: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
  }
}, {
  sequelize: db,
  modelName: 'bookHistory',
  freezeTableName: true
})

BookHistory.belongsTo(Book, {foreignKey: 'bookUuid'})
BookHistory.belongsTo(Author, {foreignKey: 'authorUuid'})
BookHistory.belongsTo(Genre, {foreignKey: 'genreUuid'})

// Create first history entry after insert
Book.afterCreate((book, options) => { createBookHistory(book) })

// Wrap up current history entry before creating new one
// Create another history entry after update
Book.afterUpdate((book, options) => {
  expireBookHistory(book)
  createBookHistory(book)
})

// Remove history entries before removing book itself
Book.beforeDestroy((book, options) => {
  destroyBookHistory(book)
})

const createBookHistory = (book) => {
  console.log('\x1b[33m%s\x1b[0m', `Creating new history entry for ${book.name}`)
  BookHistory.create(
    {
      bookUuid: book.uuid,
      authorUuid: book.authorUuid,
      genreUuid: book.genreId,
      year: book.year,
      name: book.name,
      createdAt: book.createdAt,
      validTo: null,
      validFrom: new Date()
    }
  )
}
const expireBookHistory = (book) => {
  console.log('\x1b[33m%s\x1b[0m', `Expire history entry for ${book.name}`)
  BookHistory.update(
    {validTo: new Date()},
    {where: {bookUuid: book.uuid, validTo: null}}
  )
}
const destroyBookHistory = (book) => {
  console.log('\x1b[33m%s\x1b[0m', `Destroy history entries for ${book.name}`)
  BookHistory.destroy({where: {bookUuid: book.uuid}})
}

export default BookHistory
