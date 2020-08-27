const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true, 
            'Please specify a name!'
        ]
    },
    population: {
        type: Number,
        required: [
            true,
            'please provide population'
        ]
    },
    imageUrl: {
        type: String,
        required: [
            true,
            'please specify an image URL!'
        ]
    },
    maskMandate: {
        type: Boolean,
        required: [
            true,
            'Please specify whether there is a mask mandate!'
        ]
    }
}, {
timestamps: true
});

module.exports = mongoose.model('City', CitySchema)