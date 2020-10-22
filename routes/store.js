const express = require('express')
const router = express.Router()

const userController = require('../controllers/users')
const storeControllers = require('../controllers/stores')

router.route('/')
   .get(storeControllers.index)

router.route('/:productId')
   .get(storeControllers.getProduct)

router.route('/:userId/cart')
   .get(userController.userCart)

//!!TODO!! Figure out how to access users cart
//    .post(userController.newUserCart)

//!!!Not sure how to approach this one yet
// router.route('/checkout')

module.exports = router
