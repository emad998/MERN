const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokes_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})