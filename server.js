const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport")
const session = require("expres-session")
const LocalStrategy = require("passport-local-mongoose")
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

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/progressiondb"
);

<<<<<<< HEAD
// require("./routes/html-routes.js")(app,passport);
// require("./routes/api-routes.js")(app,passport);
=======

>>>>>>> aa555b877378a5b0ed7046425b29087af21d4cd3
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});