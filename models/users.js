/////////////////////////////////////////////////////////
// models/users.js                M Jordan
/////////////////////////////////////////////////////////

var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  // guser is a required string
  guser: {
    type: String,
    required: true,
    unique: true
  },
  // gpassword is a required string
  gpassword: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
   email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// Create the Users model with the UsersSchema 
var Users = mongoose.model("Users", UsersSchema);

// Export the model
module.exports = Users;