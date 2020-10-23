const express = require('express')
const router = express.Router()

const userController = require('../controllers/users')

router.route('/')
    .post(userController.newUser)

router.route('/userId')
    .get(userController.getUser)
    .patch(userController.patchUser)
    .put(userController.putUser)
    .delete(userController.deleteUser)

module.exports = router
