// Thank you Krisana./ Jai Shree Ram / Radhe Radhe /
// console.log("Ram Ram");

const express = require("express");
const app = express();
const path = require("path");
// port
const port = 8080;

// Java script Logics file required 
// const validatorFuncs = require("./JSLogics/UserRegistered"); // this will export the logical function to check weather the user exixts or  not.
// import {validUser} from "./JSLogics";
// const validate = require('./JSLogics').default;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // to us "ejs" files.
app.set("views", path.join(__dirname, "views")); // to tell "express", to find for the "views" folder on this joined path.
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JS")));
app.use(express.static(path.join(__dirname, "public/CSS")));





let users = [
    {
        id: "1",
        email: "abc@gmail.com",
        password: "12345",
        name: "Durgavati"
    },

    // {
    //     id: "2",
    //     email: "2006jayprakashm@gmail.com",
    //     password: "123",
    //     name: "Jay"
    // }
]



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// All Routes of the project.

// home page route
app.get("/", (req, res) => {
    res.render("Home.ejs");
});


// Singup Route
app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});
// Adding data to "users" array.(DataBase).
let counter = 2;
app.post("/signup", (req, res) => {
    let id = counter;
    let { name, email, password } = req.body;
    users.push({ id, name, email, password });
    res.redirect("/");
});



let validUser = require("./public/JS/UserRegistered");

// Login route
app.get("/login", (req, res) => {
    res.render("login.ejs");
});
app.post("/login", (req, res) => {
    let { email, password } = req.body;
    let ans = validUser(email, password, users);
    // console.log(ans);
    res.redirect("/");
});





// app.get("/account",(req, res) => {
//     res.render("login.ejs")
// });

