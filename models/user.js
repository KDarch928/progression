const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")

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