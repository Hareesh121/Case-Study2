const express= require("express");
const admiRouter=express.Router();
const Authordata= require('../model/Authordata')

function router(navNew){


admiRouter.get('/',function(req,res){
res.render('addAuthor',{
navNew,
title:'Library'
});

    });

admiRouter.post('/add',function(req,res){
var item = {
author:req.body.author,
image:req.body.image,
genre:req.body.genre,
description:req.body.description
}

var author = Authordata(item);
author.save();//saving to database
res.redirect('/Authors');

});

return admiRouter;
}
module.exports=router;