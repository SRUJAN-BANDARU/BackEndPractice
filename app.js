const express = require('express');
// const userModel = require('./models/user');

const userModel = require('./models/user')

const dbConnection = require("./config/db")
// const morgan = require('morgan');

const app = express();



// app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//
app.use(express.static("public"))

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

app.get("/register", (req, res) =>{
    res.render('register');
})

app.post("/register", (req, res) =>{
    console.log(req.body);
    const {username, email, password} = req.body;
    userModel.create({
        username : username,
        email : email,
        password : password
    })
    res.send("User Registered Successfully👤");
})

app.get("/get-users", (req, res) => {
    //find always return array whether it is empty or not, while findOne can return null if it is empty
    userModel.find().then((users) => {
        res.send(users);
    })
})

app.get("/update-user", async (req,res) =>{
    await userModel.findOneAndUpdate({
        username : "srujan"
    }, {
        email : "a@a.com"
    })
    res.send("user updated")
})

app.get("/delete-user", async (req, res) =>{
    await userModel.findOneAndDelete({
        username : "abc",
        email : "abcd@gmail.com"
    })
    res.send("Deleted user Successfully");
})

app.post('/get-form-data', (req, res) =>{
    //Normally post cannot show the data in body of the request for that we need to use 2 middle wares express.json() and express.urlencoded({extended : true})
    console.log(req.body);
    res.send("Data Received");
})


app.listen(1234);