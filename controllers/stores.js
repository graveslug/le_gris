// // const Store = require('../models/store')
// // const User = require('../models/user')
//
// module.exports = {
//     index: async (req, res, next) => {
//         try {
//             //!!!!!Note: is there a findAll?
//             const store = await Store.finds({})
//             res.json(storeIndex: store)
//         }catch(error){
//             res.json({storeIndex: error})
//         }
//     },
//
//     getProduct: async (req, res, next) => {
//         try {
//             const product = await Store.findById(req.params.storeId)
//             res.json({getProduct: product})
//         }catch(error){
//             res.json({getProduct: error})
//         }
//     },
//     // store => userId => cart
//     userCart: async (req, res, next) => {
//         try{
//
//         }catch(error){
//
//         }
//     },
//     //!!!What about ANON users?
//     // store => userId => cart
//     newUserCart: async (req, res, next) => {
//         try{
//
//         }catch(error){
//
//         }
//     },
//
//
// }
