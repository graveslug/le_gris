const User = require('../models/user')
const Cart = require('../models/cart')

module.exports = {
    newUser: async (req, res, next) => {
        try{
            const newUser = await new User(req.body)
            const user = await newUser.save()
            res.json({newUser: user})
        }catch(error){
            res.json({newUser: error})
        }
    },

    getUser: async (req, res, next) => {
        try{
            const user = await User.findById(req.params.userId)
            res.json({getUser: user})
        }catch(error){
            res.json({getUser: error})
        }
    },

    putUser: async (req, res, next) => {

        try {
        const replaceUser = req.params.userId
        const newUser = req.body
            const result = await User.findByIdAndUpdate(replaceUser, newUser)
            res.status(200).json({putUser: result})
        }catch(error){
            res.json({putuser: error})
        }
    },

    patchUser: async (req, res, next) => {
        try{
        const patchUser = req.params.userId
        const newUser = req.body
            const result = await User.findByIdAndUpdate(patchUser, newUser)
            res.status(200).json({patchUser: result})
        }catch(error) {
            res.json({patchUser: error})
        }
    },

    deleteUser: async (req, res, next) => {
        try{
            const removedUser = await User.deleteOne({_id:req.params.userId})
            res.status(200).json({removedUser: "Deleted the user"})
        }catch(error){
            res.json({deleteUser: error})
        }
    },




    }
