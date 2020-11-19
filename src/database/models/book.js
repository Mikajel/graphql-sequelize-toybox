import Author from './author'
import Genre from './genre'
import db from '..'
const Sequelize = require('sequelize')
const uuid = require('uuid')

class Book extends Sequelize.Model {}

Book.init({
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
  }
}, {
  sequelize: db,
  modelName: 'book',
  freezeTableName: true
})

Book.belongsTo(Author, {foreignKey: 'authorUuid'})
Book.belongsTo(Genre, {foreignKey: 'genreUuid'})

export default Book
