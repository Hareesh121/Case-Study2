const express = require('express');
const signupRouter =express.Router();
const Signupdata= require('../model/Signupdata')

function routerSignup(nav){
    signupRouter.get('/',function(req,res){
        res.render("Signup",
       { nav,
           title:'Library'
    });
    });

signupRouter.post('/hi',function(req,res){


var item =
{
   
   firstname: req.body.firstname,
   lastname: req.body.lastname,
  username: req.body.username,
  email: req.body.email,
  phonenumber: req.body.phonenumber,
  password: req.body.password,
  confirmpassword: req.body.confirmpassword
 
}
var sign = Signupdata(item);
sign.save();
res.redirect('/Login');

})

    return signupRouter;
}
module.exports = routerSignup;