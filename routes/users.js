var express = require('express');
var router = express.Router();
var userModel = require('../models/user_model');
var cartModel = require('../models/cart_model');


/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await userModel.find()
  // check if there are any users
  if (users && users.length) return res.send(users)
  res.send('no users found');
});

// post a user
router.post('/new', async (req, res, next) => {
  const user = await userModel.create(req.body)
  console.log(user)
  res.status(200).json(user)
})

module.exports = router;
