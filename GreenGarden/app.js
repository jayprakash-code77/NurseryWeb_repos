// Thank you Krisana./ Jai Shree Ram / Radhe Radhe /
// console.log("Ram Ram");
require('dotenv').config(); // loading the environment variables.
const express = require("express");
const app = express();
const path = require("path");

// serving the static files
app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JSLogics")));
app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JSMethods")));
app.use(express.static(path.join(__dirname, "public/jsimage/")));


// this is used to understand the url encoded data
app.use(express.urlencoded({extended:true}));

// requring the "route directory".
const routes = require("./routes");

// This line is used to define middleware and route handling in Express. Specifically, it is known as middleware routing or route mounting. 
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


















/* 
const express = require("express");
const app = express();
const path = require("path");


const { v4: uuidv4 } = require('uuid');

// port
const port = 8080;
// SQL Required
const mySQL = require("mysql2");



// All the "set" methods of "Express"
app.set("view engine", "ejs"); // to us "ejs" files.
app.set("views", path.join(__dirname, "views")); // to tell "express", to find for the "views" folder on this joined path.



// All the "use" methods of "Express".
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JS")));
app.use(express.static(path.join(__dirname, "public/CSS")));


// setting the connection with data base 
const connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    database: "nursery",
    password: "2006@jayshriM"
});


try {
    connection.query("SHOW TABLES", (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
    });
} catch (error) {
    console.log(error);
}




let users = [
    {
        id: uuidv4(),
        email: "abc@gmail.com",
        password: "12345",
        name: "Durgavati"
    },
]




// All Routes of the project.


// home page route
app.get("/", (req, res) => {
    res.render("Home.ejs");
});


// Singup Route
app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});
// Adding data to "nursery"(DataBase).
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

*/