const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
  useremail: String,
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;