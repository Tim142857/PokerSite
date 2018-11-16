let Sequelize = require('sequelize');
let sequelize = require('./config').sequelize;
const User = require('./User')
const Address = require('./Address')

let Club = sequelize.define('club', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name : {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  // image: {
  //   type: Sequelize.STRING
  // },
  ghost: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
},
{
  freezeTableName: true,
  timestamps: true,
  defaultScope: {
    include: [
      { model: User },
      { model: Address }
    ]
  },
  scopes: {
    withUser: {
      include: [User]
    },
    full: {
      include: [
        { model: Address },
        { model: User }
      ]
    },
    withAddress: {
      include: [
        { model: Address }
      ]
    }
  },
});


module.exports = Club;
