const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
// mongoose.connect('mongodb://localhost:27017/users_test?authSource=admin');
const Schema = mongoose.Schema;


const SignupSchema =new Schema({
    firstname:String,
    lastname:String,
    username:String,
    email:String,
    phonenumber:Number,
    password:String,
    confirmpassword:String

});


var Signupdata= mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;
