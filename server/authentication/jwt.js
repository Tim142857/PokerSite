const jwt = require('jsonwebtoken');
const secret = 'mySecret';

function generateToken(user){
  var token = jwt.sign({
    userId: user.id,
    exp:   Math.floor(new Date().getTime()/1000) + 3600 // Note: in seconds!
  }, secret);  // secret is defined in the environment variable JWT_SECRET
  return token;
}

function verifyToken(req, res, next) {
  const secret = 'mySecret';
  try{
    var token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, secret);
    req.userId = decoded.userId;
  } catch(e) {
    throw new Error('Token pas bon !!!!!')
  }
  next();
}

module.exports = {
  generateToken,
  verifyToken
}
