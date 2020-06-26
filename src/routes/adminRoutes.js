const express= require("express");
// const multer=require("multer");
const adminRouter=express.Router();
// const path=require("path");


// let storage = multer.diskStorage({
//     destination : (req,file,cb)=>{
//         cb(null,"./public/images");
//     },
//     filename : (req,file,cb)=>{
//         cb(null,file.fieldname + Date.now() + path.extname(file.orginalname));
//     }
// });

// const upload = multer({
//     storage : storage,
// }).single("image");

const Bookdata= require('../model/Bookdata');
// const multer = require("multer");

function router(navNew){


adminRouter.get('/',function(req,res){
res.render('addBook',{
navNew,
title:'Library'
});

    });

adminRouter.post('/add',function(req,res){

// upload(req,res,(err)=>{
// if(err)
// {
//     console.log("Error occured while uploading");

// }
// else{
    var item = {
        title:req.body.title,
        author:req.body.author,
       description:req.body.description,
        image:req.body.image
        }
        
        var book= Bookdata(item);
        book.save();//saving to database
        res.redirect('/books');
        

// }


// })




});

return adminRouter;
}
module.exports=router;