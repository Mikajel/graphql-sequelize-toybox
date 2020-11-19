import db from '..'
const Sequelize = require('sequelize')
const uuid = require('uuid')

class Author extends Sequelize.Model {}

Author.init({
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: uuid.v4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'author',
  freezeTableName: true
})

export default Author
