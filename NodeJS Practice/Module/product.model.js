const mongoose = require('mongoose');

const productSchme = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please enter product name"],
        },
        
        quantity: {
            type: Number,
            require: true,
            default: 0
        },

        price: {
            type: Number,
            require: true,
            default: 0
        },

        image: {
            type: String,
            require: false
        },
    },
    {
        timestamps: true 
    }
)

const product = mongoose.model("Products", productSchme)
module.exports = product;