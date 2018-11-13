const { Club, Address, User } = require('server/models');


async function findOne(id) {
  var club = await Club.findByPk(id);
  if(!club) throw new Error('RESSOURCE_NOT_FOUND')
  return club;
}

async function findAll(){
  var clubs = await Club.findAll();
  return clubs;
}

async function isOwner(clubId, userId) {
  var club = await Club.findByPk(clubId);
  if(!club) throw new Error('RESSOURCE_NOT_FOUND')
  return club.id == userId;
}

async function create(body){
  var addressToCreate = {};
  if(body.address) addressToCreate.address = body.address;
  if(body.city) addressToCreate.city = body.city;
  if(body.zipCode) addressToCreate.zipCode = body.zipCode;
  var user = await User.findOne({ where:{ id: body.user }});
  if(!user) throw new Error('RESSOURCE_NOT_FOUND')
  var address = await Address.create(addressToCreate);
  var club = await Club.create({ name: body.name, phone: body.phone });
  await club.setAddress(address);
  await club.setUser(user);
  club = await Club.findByPk(club.id);
  return club;
}

async function edit(body){
  var club = await Club.findByPk(body.id);
  if (!club) throw new Error('RESSOURCE_NOT_FOUND')
  club = Object.assign(club, body);
  club = await club.save();
  return club;
}

async function upload(){
}

module.exports = {
  findOne,
  findAll,
  create,
  isOwner,
  edit
}
