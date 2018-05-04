const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const fileUpload = require("express-fileupload");
const routes = require("./routes");
var logger = require("morgan"); // logger

const app = express();
const PORT = process.env.PORT || 3001;

// Use morgan logger for logging requests
app.use(logger("dev"));

// Requiring our models for syncing
var db = require("./models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(fileUpload());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

AWS.config.loadFromPath('./config.json');
var s3Bucket = new AWS.S3({params: {Bucket: "progressionapp"}});
const baseAWSURL = "https://s3-us-east-2.amazonaws.com/progressionapp/"

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/progressiondb"
);


// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});