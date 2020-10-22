const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admins')


//!!!Most likely needs some route reworking at some point.
router.route(/adminId)
    .get(adminController.getProduct)
    .post(adminController.newProduct)
    .patch(adminController.updateProduct)
    .put(adminController.replaceProudct)
    .delete(adminController.deleteProduct)

//What other things needed?

module.exports = router
