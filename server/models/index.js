const User = require('./User');
const Club = require('./Club');
const Address = require('./Address');

let Models = {
  User,
  Club,
  Address
}

//Relations

User.hasOne(Address);
Club.hasOne(User);
Club.hasOne(Address);

module.exports = Models;
