const express = require('express');

const app = new express();


const nav = [
    {link:"/",name:"Home"},
    {link:"/login",name:"Login"},
    {link:"/signup",name:"Signup"}
   
];


const navNew =[
  {link:"/index",name:"Home"},
  {link:"/books",name:"Books"},
  {link:"/authors",name:"Authors"},
    {link:"/admin",name:"Add Book"},
    {link:"/admi",name:"Add Author"},
    {link: "/", name: "Sign out"}
]

const booksRouter= require('./src/routes/bookRoutes')(navNew)
const authorsRouter= require('./src/routes/authorRoutes')(navNew)
const loginRouter= require('./src/routes/loginRoutes')(nav)
const signupRouter= require('./src/routes/signupRoutes')(nav)
const adminRouter= require('./src/routes/adminRoutes')(navNew)
const admiRouter= require('./src/routes/admiRoutes')(navNew)
const homepageRouter= require("./src/routes/homepageRoutes")(navNew)


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views",__dirname+ "/src/views");

app.use('/books',booksRouter);
app.use('/Authors',authorsRouter);
app.use('/Login',loginRouter);
app.use('/Signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/admi',admiRouter);
app.use('/index',homepageRouter)


app.get("/",function (req,res){

    res.render("Home",
    { 
       title:'library',
       nav
    });
});



app.listen(5005); 
console.log("port : 5005")
