const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new Schema({
    
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    last_login:{
        type:Date,
        default: Date.now
    },
    status:{
        type: String,
        default: "active"
    }
    
})
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User",userSchema);

module.exports = User;


module.exports.createUser = function (newUser, callback){
    bcrpyt.genSalt(10, function(err, salt){
        bcrpyt.hash(newUser.password, salt, function(err, hash){
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// gets a user by the username
module.exports.getUserByUsername = function(username, callback){
    console.log("getting user by username");
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    User.findbyid(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    // usebycrpt to check pw 
    console.log("comparing passsword - modals");
    bcrpyt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    })
}