const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.set("view engine", "ejs");


//This is middle ware which is a function that can executes before sending response on any request and at last we need to return next
// app.use((req, res, next)=>{
//     console.log("This is middle ware");
//     return next()
// })

app.get("/",(req, res)=>{
    res.render('index');
})

app.get("/about",(req, res)=>{
    res.send("About Page");
})

app.get("/profile",(req, res)=>{
    res.send("Profile Page");
})

app.listen(1234);