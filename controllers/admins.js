const Product = require('../models/product')

module.exports = {
    getProduct: async (req, res, next) => {
        try {
            const product = await Store.findById(req.params.storeId)
            res.json({getProduct: product})
        }catch(error) {
            res.json({getPorduct: error})
        }
    },

    newProduct: async(req, res, next) => {
        try{
            const userId = req.params.userId
            const newProduct = await new Store(req.body)
            const user = await User.findById(userId)
            const product = await newProduct.save()
            newProduct._userId = user
            await newProduct.save()
            user._productId.push(newProduct)
            await user.save()
            res.json({newProduct: product})
        }catch(error){
            res.json({newProduct: error})
        }
    },

    updateProduct: async(req, res, next) => {
        try{
          const patchProduct = req.params.storeId
        const newProduct = req.body
            const result = await Store.findByIdAndUpdate(patchProduct, newProduct)
            res.status(200).json({patchProduct: result}).redirect('/products')
        }catch(error){
            res.json({patchProduct: error})
        }
    },

    replaceProduct: async (req, res, next) => {
        try{
        const replaceProduct = req.params.storeId
        const newProduct = req.body
        const result = await Store.findByIdAndUpdate(replaceProduct, newProduct)
            res.status(200).json({replaceProduct: result})
        }catch(error){
            res.json({replaceProduct: error})
        }
    },

    deleteProduct: async (req, res, next) =>{
        try{
            const removeProduct = await Store.deleteOne({_id:req.params.storeId})
            res.status(200).json({removeProduct: "The product has been deleted"})
        }catch(error){
            res.json({deleteProduct: error})
        }
    }

}
