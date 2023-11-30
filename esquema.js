const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    password: String
});

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: String,
    comments: String,
    rol: {
        type: String,
        enum: ['Admin', 'Empelado']
    }
});

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String

})

let userSchema = mongoose.model("User", UserSchema);
let profileSchema = mongoose.model("Profile", ProfileSchema);
let credentialsSchema = mongoose.model("Credentials", CredentialsSchema);


module.exports = {userSchema, profileSchema, credentialsSchema};