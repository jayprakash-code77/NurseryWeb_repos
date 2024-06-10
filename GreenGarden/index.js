// Thank you Krisana./ Jai Shree Ram / Radhe Radhe /
// console.log("Ram Ram");

const express = require("express");
const app = express();
const path = require("path");
// port
const port = 8080;

app.set("view engine","ejs"); // to us "ejs" files.
app.set("views", path.join(__dirname,"views")); // to tell "express", to find for the "views" folder on this joined path.
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/CSS")));




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// All Routes of the project.

// home page route
app.get("/",(req, res) => {
    res.render("Home.ejs");
});

// 
