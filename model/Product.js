const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    details: [
        {
            type: String,
            required: true
        }
    ],
    review: {
        type: Number,
        required: true
    }
})

const ProductModel = mongoose.model('products', ProductSchema);
const CartProducts = mongoose.model('cart', ProductSchema);
module.exports = {ProductModel, CartProducts};