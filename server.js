const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport")
const session = require("express-session")
const LocalStrategy = require("passport-local-mongoose")
const logger = require("morgan")
const cookieParser = require('cookie-parser');
const models = require("./models")
const routes= require("./routes");
var db = require("./models")
// Configure body parser for AJAX requests
// const AWS = require("aws-sdk");
// const fileUpload = require("express-fileupload");
// const routes = require("./routes");
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view



app.use(cookieParser());
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}))
// app.use(fileUpload());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view


//AWS.config.loadFromPath('./config.json');
// var s3Bucket = new AWS.S3({params: {Bucket: "progressionapp"}});
// const baseAWSURL = "https://s3-us-east-2.amazonaws.com/progressionapp/"

app.use(logger("dev"));


app.use(passport.session()); // persistent login sessions
//load passport strategies
//require('./config/passport/passport.js')(passport);



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

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});