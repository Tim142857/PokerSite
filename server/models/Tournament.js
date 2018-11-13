let Sequelize = require('sequelize');
let sequelize = require('./config').sequelize;

let Tournament = sequelize.define('tournament', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
