require('rootpath')();
const ClubManager = require('server/managers/ClubManager');


function isOwner(req, res, next){
  var userId = req.userId;
  var clubId = req.params.id;
  ClubManager.isOwner(clubId, userId)
  .then(isOwner => {
    if(isOwner){
      next();
    } else {
      throw new Error('Not the owner')
    }
  })
}



module.exports = isOwner;
