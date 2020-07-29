/** Routes for authentication. */

const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const createToken = require("../helpers/createToken");
const readToken = require("../helpers/readToken");
const { authRequired } = require("../middleware/auth");


router.post("/login", async function(req, res, next) {
  try {
    const user = await User.authenticate(req.body);
    const token = createToken(user);
    return res.json({ token });
  } catch (e) {
    return next(e);
  }
});

router.post("/user", authRequired, async function(req, res, next) {
  try {
    const _token = req.body._token
    console.log(_token)
    const user = await User.findOne(readToken(_token));
    return res.json(user)
  } catch (e) {
    return next(e);
  }
});


module.exports = router;