import db from '..'
const Sequelize = require('sequelize')
const uuid = require('uuid')

class User extends Sequelize.Model {}

User.init({
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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  pwd: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'user',
  freezeTableName: true
})

export default User
