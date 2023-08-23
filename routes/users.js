var express = require('express');
var router = express.Router();
var { userModel } = require('../models/user_model');
var { contactInformationModel } = require('../models/contact_information_model');
var { cartModel } = require('../models/cart_model');


/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await userModel.find()
    // check if there are any users
    if (users && users.length) return res.send(users)
  } catch (error) {
    res.status(404).json('users not found')
  }
});

// post a user
// will need user information at first then need basic contact information,
// this information may be optional but it will be initiated.
router.post('/new', async (req, res, next) => {
  try {
    const user = new userModel(req.body.user)
    const contact_information = new contactInformationModel(req.body.contact)
    const user_cart = new cartModel({ total: 0 })
    user.contact = contact_information.id
    user.cart = user_cart.id
    await user.save()
    await contact_information.save()
    await user_cart.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    const user = await userModel
    .findById(req.params.id)
    .populate('contact')
    .populate('cart')
    res.status(200).json(user)
  }catch (error){
    res.status(404).json(error.message)
  }
})

module.exports = router;
