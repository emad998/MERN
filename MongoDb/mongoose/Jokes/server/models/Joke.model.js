const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [
            true,
            'please specify setup'
        ]
    },
    punchline: {
        type: String,
        required: [
            true,
            'please specify punchline'
        ]
    }

}, {
    timestamps: true
}
)

module.exports = mongoose.model('Joke', JokeSchema)