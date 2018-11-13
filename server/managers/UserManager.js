const { User } = require('server/models');



function findOrCreateUser(type, profile){
  switch(type){
    case 'FACEBOOK':
    return findOrCreateUserFromFacebook(profile);
    break;
    case 'GOOGLE':
    return findOrCreateUserFromGoogle(profile);
    break;
    default:
    throw new Error('type authentication doesnt exist');
  }
}

async function findOrCreateUserFromFacebook(fbProfile){
  var user = await User.findOne({
    where: { facebookID: fbProfile.id }
  });
  if(!user){
    user = {
      facebookID: fbProfile.id,
      firstName: fbProfile.name.givenName,
      lastName: fbProfile.name.familyName,
      displayName: fbProfile.displayName
    };
    user = await User.build(user).save();
  }
  return Promise.resolve(user);
}

async function findOrCreateUserFromGoogle(GProfile){
  var user = await User.findOne({
    where: { googleID: GProfile.id }
  });
  if(!user){
    user = {
      googleID: GProfile.id,
      firstName: GProfile.name.givenName,
      lastName: GProfile.name.familyName,
      displayName: GProfile.displayName
    };
    user = await User.build(user).save();
  }
  return Promise.resolve(user);
}

module.exports = {
  findOrCreateUserFromFacebook,
  findOrCreateUserFromGoogle,
  findOrCreateUser
}
