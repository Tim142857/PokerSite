const { Club, Address, User, Tournament } = require('server/models');


async function findOne(id) {
  //TODO
  return tournament;
}

async function findAll(){
  //// TODO: 
  return tournaments;
}

async function create(body){
  var tournament = {
    name: body.name,
    //date: date,
    city: body.city
  }

  var createdTournament = await Tournament.create(tournament)
  console.log(createdTournament)
  return createdTournament
}

async function edit(body){
  //// TODO:
  return editedTournament;
}

async function upload(){
}

module.exports = {
  findOne,
  findAll,
  create,
  edit
}
