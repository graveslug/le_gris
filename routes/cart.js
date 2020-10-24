const express = require('express')
const router = express.Router()

const cartController = require('../controllers/carts')


router.route('/:userId)
   .post(cartController.addToCart)
   .get(cartController.getCart)

module.exports = router
