const express= require("express");
const homepageRouter = express.Router();  

function routerHome(navNew){
   
    homepageRouter.get("/",function(req,res){                      
    
        res.render("index",
        {
          navNew,
                   
        })
    });
    
    

    return homepageRouter;
}



module.exports = routerHome;