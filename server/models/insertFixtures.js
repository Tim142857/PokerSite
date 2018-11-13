var User = require('./User');
var Address = require('./Address');
var Club = require('./Club');

function insertData(){

  User.create({
    firstName: 'Tim'
  })
  .then(user => {
    Club.create({
      name: 'le club',
    })
    .then(club => {
      club.setUser(user);
      club.save()
      .then(club => {
        // console.log(club);
        // console.log('------------------------------------------')
        User.scope('full').findByPk(user.id)
        .then(user => {
          // console.log(user);
        })
      })
    })
  })
}

module.exports = insertData;
