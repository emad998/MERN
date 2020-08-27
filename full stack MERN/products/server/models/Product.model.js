const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            'Please enter Title'
        ]
    },
    price: {
        type: Number,
        required: [
            true,
            'please provide price'
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'please enter description'
        ]
    }


}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema)