require('rootpath')();
var express = require('express');
var router = express.Router();

const TournamentManager = require('server/managers/TournamentManager');

/**
* Get all tournaments
*
* @section TOURNAMENTS
* @type get
* @url /tournaments
*/
router.get('/',
async function(req, res){
  res.send('tournaments');
  // var clubs = await ClubManager.findAll();
  // res.send(clubs);
});


module.exports = router;
