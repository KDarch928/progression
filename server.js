const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var logger = require("morgan"); // logger 

const app = express();
const PORT = process.env.PORT || 3001;
const S3_BUCKET = process.env.S3_BUCKET;

// Use morgan logger for logging requests
app.use(logger("dev"));

// Requiring our models for syncing
var db = require("./models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/progressiondb"
);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});