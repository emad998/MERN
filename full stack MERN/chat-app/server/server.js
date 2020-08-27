const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: __dirname + '/.env'});
const socketIO = require("socket.io");



const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());

require('./config/mongoose.config');

const userRoutes = require('./routes/users.routes');
userRoutes(app);

const server = app.listen(8000, () => console.log('listening now!'));

const io = socketIO(server);

io.on("connection", socket => {
    socket.on("message", ({ name, message }) => {
        io.emit("message", { name, message })
    });
});