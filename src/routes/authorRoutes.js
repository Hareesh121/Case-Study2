const express = require('express');
const authorsRouter=express.Router();
const Authordata = require('../model/Authordata');
function router(navNew){

    
    authorsRouter.get('/',function(req,res){


      Authordata.find()
      .then(function(Authors){


        res.render("Authors",
        { navNew,
            title:'AUTHORS',Authors
     });
     });
     
      })
     
    authorsRouter.get('/:id',function(req,res){
        const id= req.params.id
        Authordata.findOne({_id:id})
        .then(function(Author){
        res.render('Author', {navNew,
        title:'library',
        Author
    });
    });
  });


  authorsRouter.get('/author/edit/:id',function(req,res)
  {   
    const id= req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author)
    { 
     res.render("authoredit",{navNew,author})
    })
  
    
  })
  
      authorsRouter.post("/author/update",function(req,res){
          var id=req.body.id;
          var author=req.body.author;
          var genre=req.body.genre;
          var description=req.body.description;
          Authordata.updateOne({_id:id},{$set:{author:author,genre:genre,description:description}},function(req,res){
        
          })
          res.redirect('/authors');
          
      })
  
  
      authorsRouter.get('/delete/:id',function(req,res){
          var id=req.params.id;
          console.log(id);
         
          Authordata.findByIdAndRemove(req.params.id,function(req,res) {
                  
          });
          res.redirect('/authors');
      })
 return authorsRouter;
}



module.exports=router;