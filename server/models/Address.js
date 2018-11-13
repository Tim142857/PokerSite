let Sequelize = require('sequelize');
let sequelize = require('./config').sequelize;

let Address = sequelize.define('address', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  address : {
    type: Sequelize.STRING
  },
  city : {
    type: Sequelize.STRING
  },
  zipCode : {
    type: Sequelize.STRING
  },
},
{
  freezeTableName: true,
  timestamps: true,
  hooks: {
  },
});

module.exports = Address;
