const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cities_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
