const Product = require('../models/product')
// const User = require('../models/user')

module.exports = {
    index: async (req, res, next) => {
        try {
            //!!!!!Note: is there a findAll?
            const product = await Product.finds({})
            res.json({productIndex: product})
        }catch(error){
            res.json({productIndex: error})
        }
    },

    getProduct: async (req, res, next) => {
        try {
            const product = await Product.findById(req.params.productId)
            res.json({getProduct: product})
        }catch(error){
            res.json({getProduct: error})
        }
    },
    // product => userId => cart
    userCart: async (req, res, next) => {
        try{

        }catch(error){

        }
    },
    //!!!What about ANON users?
    // product => userId => cart
    newUserCart: async (req, res, next) => {
        try{

        }catch(error){

        }
    },


}
