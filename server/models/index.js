const User = require('./User');
const Club = require('./Club');
const Address = require('./Address');
const Tournament = require('./Tournament');

let Models = {
  User,
  Club,
  Address,
  Tournament
}

//Relations

User.hasOne(Address);
Club.hasOne(User);
Club.hasOne(Address);

module.exports = Models;
