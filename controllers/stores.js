const Product = require('../models/product')
const User = require('../models/user')

module.exports = {
    index: async (req, res, next) => {
        try {
            const product = await Product.find({})
            res.json({productIndex: product})
        }catch(error){
            res.json({productIndex: error})
        }
    },

    // newProduct: async (req, res, next) => {
    //     try{
    //         const newProduct = await new Product(req.body)
    //         const product = await newProduct.save()
    //         res.json({newProduct: product})
    //     }catch(error){
    //         res.json({newProduct:error})
    //     }
    // },

    getProduct: async (req, res, next) => {
        try {
            const product = await Product.findById(req.params.productId)
            res.json({getProduct: product})
        }catch(error){
            res.json({getProduct: error})
        }
    },


}
