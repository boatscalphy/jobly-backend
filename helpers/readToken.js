const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

function readToken(token) {
    console.log(token)
    const ticket = jwt.verify(token, SECRET);
    return ticket.username

};
  
module.exports = readToken;