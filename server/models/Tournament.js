let Sequelize = require('sequelize');
let sequelize = require('./config').sequelize;

let Tournament = sequelize.define('tournament', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true
  },
  //date: {
   // type: Sequelize.DATE,
   // required: true
  //},
  city: {
    type: Sequelize.STRING,
  },
  ghost: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
},
{
  freezeTableName: true,
  timestamps: true
});


module.exports = Tournament;
