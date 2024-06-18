// Thank you Krisana./ Jai Shree Ram / Radhe Radhe /
// console.log("Ram Ram");

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

