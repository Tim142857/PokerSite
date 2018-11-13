require('rootpath')();
var express = require('express');
var router = express.Router();
var isAuthenticated = require('connect-ensure-login').ensureLoggedIn();
var jwtMiddleware = require('server/middlewares/jwtMiddleware');
var isOwner = require('server/middlewares/isOwner');

const ClubManager = require('server/managers/ClubManager');


// router.use('/', isAuthenticated);

/**
* Get a club by its id
*
* @section CLUBS
* @type get
* @url /clubs/:id
* @param {integer} id
*/
router.get('/:id',
jwtMiddleware,
isOwner,
function(req, res){
  var id = req.params.id;
  ClubManager.findOne(id)
  .then(club => {
    // console.log(club);
    res.send(club);
  })
  // console.log(club);
  // res.send(club);
});

/**
* Get all clubs
*
* @section CLUBS
* @type get
* @url /clubs
*/
router.get('/',
async function(req, res){
  var clubs = await ClubManager.findAll();
  res.send(clubs);
});


/**
* Create club
*
* @section CLUBS
* @type post
* @url /clubs
* @param {integer} owner
* @param {string} name
* @param {string =} phone
* @param {string =} address
* @param {string =} zipCode
* @param {string =} city
*/
router.post('/',
async function(req, res){
  var club = await ClubManager.create(req.body);
  res.send(club);
});


/**
* Edit club
*
* @section CLUBS
* @type post
* @url /clubs/edit
* @param {integer} id
* @param {integer =} owner
* @param {string} name
* @param {string =} phone
* @param {string =} address
* @param {string =} zipCode
* @param {string =} city
*/
router.post('/edit',
async function(req, res){
  var club = await ClubManager.edit(req.body);
  res.send(club);
});


module.exports = router;
