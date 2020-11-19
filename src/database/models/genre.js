import db from '..'
const Sequelize = require('sequelize')
const uuid = require('uuid')

class Genre extends Sequelize.Model {}

Genre.init({
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
  modelName:  'genre',
  freezeTableName: true
})

export default Genre
