const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        album: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true
        },

        quantity: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        _userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema)
