var express = require('express');
var router = express.Router();
var { userModel } = require('../models/user_model');
var {contactInformationModel} = require('../models/contact_information_model');
var { cartModel } = require('../models/cart_model');


/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await userModel.find()
  // check if there are any users
  if (users && users.length) return res.send(users)
  res.send('no users found');
});

// post a user
// will need user information at first then need basic contact information,
// this information may be optional but it will be initiated.
router.post('/new', async (req, res, next) => {
  const user = await userModel.create(req.body.user)
  const contact_information = await contactInformationModel.create(req.body.contact)
  user.contact = contact_information
  console.log(user)
  console.log('error')
  res.status(200).json(user)
})

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id)
  const user = await userModel.findById(req.params.id)
  console.log(user)
  console.log('error')
  res.status(200).json(user)
})

module.exports = router;
