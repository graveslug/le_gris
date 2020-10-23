const Product = require('../models/product')
const User = require('../models/user')
const Cart = require('../models/cart')

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

    // store => :userId => cart
    addToCart: async (req, res, next) => {
        const { productId, quantity, name, price } = req.body
        const userId = req.params.userId

         // const user = await User.findById(userId)
        try{
            let cart = await Cart.findOne({ userId })

            if (cart) {
        //cart exists for that user
                let itemIndex = cart.products.findIndex(item => item.productId == productId)
                if(itemIndex > -1) {
            //product exists in the cart, update quantity
                    let productItem = cart.products[itemIndex]
                    productItem.quantity = quantity
                    cart.products[itemIndex] = productItem
                } else {
            //product does not exists in cart, add new item
                    cart.products.push({ productId, quantity, name, price })
                }
                cart = await cart.save()
                return res.status(201).send(cart)
            } else {
                //no cart for user, create new cart
                const newCart = await Cart.create({
                    userId,
                    products: [{ productId, quantity, name, price }]
                })
                return res.status(201).send(newCart)
            }
        }catch(error){
            res.status(500).json({addToCart: error})
        }
    }


}
