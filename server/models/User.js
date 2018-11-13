let Sequelize = require('sequelize');
let sequelize = require('./config').sequelize;
let Address = require('./Address');

let User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  facebookID : {
    type: Sequelize.STRING
  },
  googleID : {
    type: Sequelize.STRING
  },
  displayName : {
    type: Sequelize.STRING
  },
  firstName : {
    type: Sequelize.STRING
  },
  lastName : {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  ghost: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
},
{
  freezeTableName: true,
  timestamps: true,
  scopes: {
    full: {
      include: [
        { model: Address }
      ]
    }
  },
});



module.exports = User;
