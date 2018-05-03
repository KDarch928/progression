const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const io = require("socket.io")();
const passport = require("passport")
const session = require("express-session")
const LocalStrategy = require("passport-local-mongoose")
const logger = require("morgan")
const cookieParser = require('cookie-parser');
//const models = require("./models")
const routes= require("./routes");
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);
app.use(logger("dev"));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//load passport strategies
//require('./config/passport/passport.js')(passport);
app.use(cookieParser());
app.use(function (req, res, next){
	//if user exists we will access it from anywhere if not we get null. 
	res.locals.user = req.user || null; 
	next();
});


app.use(routes);
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/progressiondb"
);

// require("./routes/html-routes.js")(app,passport);
//require("./routes/index.js")(app,passport);



app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});