const express = require('express');
const booksRouter=express.Router();
const Bookdata = require('../model/Bookdata');
// const { db } = require('../model/Bookdata');
function router(navNew){







    booksRouter.get('/',function(req,res){
      Bookdata.find()
      .then(function(books){
        res.render("books",
        { navNew,
            title:'Books',
            books
     });
     });

      })

    
    booksRouter.get('/:id',function(req,res){
        const id= req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
          res.render('book', {navNew,
            title:'library',
          book
        });
        })
        });


booksRouter.get('/book/edit/:id',function(req,res)
{   
  const id= req.params.id;
  Bookdata.findOne({_id:id})
  .then(function(book)
  { 
   res.render("bookedit",{navNew,book})
  })

  
})

    booksRouter.post("/book/update",function(req,res){
        var id=req.body.id;
        var title=req.body.title;
        var author=req.body.author;
        var description=req.body.description;
        Bookdata.updateOne({_id:id},{$set:{title:title,author:author,description:description}},function(req,res){
      
        })
        res.redirect('/books');
        
    })


    booksRouter.get('/delete/:id',function(req,res){
        var id=req.params.id;
        console.log(id);
       
        Bookdata.findByIdAndRemove(req.params.id,function(req,res) {
           
            
            
        });
        res.redirect('/books');
    })

    return booksRouter;
}



module.exports=router;