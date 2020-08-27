const experss = require('express');

const app = experss();

app.use(experss.json())

require('./config/mongoose.config')

const jokeRoutes = require('./routes/joke.routes')
jokeRoutes(app);

app.listen(8000, () => console.log('listening now'))