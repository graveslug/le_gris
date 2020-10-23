const express = require('express')
const router = express.Router()

const userController = require('../controllers/users')
const storeController = require('../controllers/stores')

router.route('/')
   .get(storeController.index)

router.route('/:productId')
   .get(storeController.getProduct)

//:userId/:productId? Will that work?
router.route('/:userId/:productId')
   .get(storeController.addToCart)

//!!!Not sure how to approach this one yet
// router.route('/checkout')

module.exports = router
