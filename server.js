// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors')
const unirest = require('unirest')
const cookieParser = require('cookie-parser')
const http = require('http').createServer(app);
const io = require('socket.io')(http)

dotenv.config();

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 3004
console.log("url", process.env.MONGODB_COMPASS)
const mongoURI = process.env.MONGODB_URI || process.env.MONGODB_COMPASS

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)

// Middleware
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static("public"));
app.use(
    session({
        secret: "mutusamy chen",
        resave: false,
        saveUninitialized: false
    })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// app.use(cors({
//     origin: function (origin, callback) {
//         // allow requests with no origin 
//         // (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (process.env.allowedOrigins.indexOf(origin) === -1) {
//             var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }));

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Routes
const notesController = require('./controller/notes.js');
app.use('/notes', notesController);
const sessionsController = require("./controller/sessions.js");
app.use("/sessions", sessionsController);
const usersController = require("./controller/users.js");
app.use("/users", usersController);
const aylienapiController = require("./controller/aylienapi.js");
app.use("/api", aylienapiController);



// this will catch any route that doesn't exist
app.get("*", (req, res) => {
    res.status(404).json("Sorry, page not found");
});

io.on('connection', function (socket) {
    const { id } = socket.client;
    const userCount = io.engine.clientsCount
    console.log(`user connected: ${id}`);
    console.log(`number of users connected: ${io.engine.clientsCount}`);
    io.emit("at first connect", userCount)
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on("chat message", (msg) => {
        console.log(`${id}: ${msg}`);
        io.emit("chat message", { id, msg }, userCount);
    });
});


http.listen(PORT, () => {
    console.log('Let\'s get things done on port', PORT)
})



