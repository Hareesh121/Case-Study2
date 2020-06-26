const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
// mongoose.connect('mongodb://localhost:27017/users_test?authSource=admin');,{useUnifiedTopology:true, useNewUrlParser:true}
const Schema = mongoose.Schema;


const BookSchema =new Schema({
    title:String,
    author:String,
    description:String,
    image:String

});


var Bookdata= mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
