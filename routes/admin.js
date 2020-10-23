const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admins')


//!!!Most likely needs some route reworking at some point.
router.route('/:adminId')
    .get(adminController.getProduct)
    .post(adminController.newProduct)
    .patch(adminController.updateProduct)
    //!!TODO something is up with this route. required a callback function but gets back an object undefined.
    .put(adminController.replaceProduct)
    .delete(adminController.deleteProduct)

//What other things needed?

module.exports = router
