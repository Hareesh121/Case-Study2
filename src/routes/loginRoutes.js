const express = require('express');
const loginRouter =express.Router();
const Signupdata = require('../model/Signupdata')

function routerlogin(nav){
    loginRouter.get('/',function(req,res){
        res.render("Login",
       { nav,
           title:'Library'
    });
})

loginRouter.post('/val',function(req,res){

    var email=req.body.email;
  
    var password=req.body.password;
    // console.log(password);
    Signupdata.findOne({email:email,password:password},function(err,chk){
        // console.log(email);
    
        if(!chk){
            return res.redirect('/Login');
        }
        res.redirect('/index');
    })
   
})
    

 
    return loginRouter
}
module.exports = routerlogin;