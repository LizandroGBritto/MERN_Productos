const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: [true, "Product Name is required"],
        minlength: [3, "Product Name must be at least 3 characters long"]
    },
    productPrice: {
        type: Number,
        required: [true, "Product Price is required"],
        min: [0, "Product Price must be a positive number"]
    },
    productDescription: {
        type: String,
        required: [true, "Product Description is required"],
        minlength: [5, "Product Description must be at least 5 characters long"]
    }
}, {timestamps: true})

module.exports.ProductModel = mongoose.model('Product', ProductSchema);