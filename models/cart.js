const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
    {
        _userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        products: [
            {
                productId: Number,
                quantity: Number,
                name: String,
                price: Number
            }
        ],
        active: {
            type: Boolean,
            default: true
        },
        modifiedOn: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Cart', cartSchema)
