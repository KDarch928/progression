const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const io = require("socket.io")();
const passport = require("passport")
const session = require("expres-session")
const LocalStrategy = require("passport-local-mongoose")

const routes= require("./routes");
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

io.on("connection", (client )=> {


})
io.listen(PORT)
;

app.use(routes);
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/progressiondb"
);

// require("./routes/html-routes.js")(app,passport);
require("./routes/index.js")(app,passport);



app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});