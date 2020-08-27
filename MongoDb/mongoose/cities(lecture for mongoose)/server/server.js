const express = require('express');

const app = express();

app.use(express.json());

require('./config/mongoose.config');

const cityRoutes = require('./routes/city.routes');
cityRoutes(app);

app.listen(8000, () => console.log('listening now!'));