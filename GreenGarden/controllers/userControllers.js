let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

// require mongoose
// const mongoose = require("../config/batabase");

const User = require("../models/user");

// rendering sign up page to user
exports.newUser = (req, res) => {
    try {
        res.render("../views/usersViews/signup.ejs");
    } catch (error) {
        console.log("Error is :- " + error);
    }
}
// adding user data to data base.
exports.addNewUser = (req, res) => {
    try {
        let { name, email, password } = req.body;
        let user = new User({
            name: name,
            email: email,
            password: password,
        });
        // saving the data
        user
            .save()
            .then((result) => {
                console.log("User singned up!");
            })
            .catch((err) => {
                console.log("Error is :" + err);
            })
        res.redirect("/api");

    } catch (error) {
        console.log("Error in adding the data to database :" + error);
    }
}


exports.singInUser = (req, res) => {
    try {
        res.render("../views/usersViews/login.ejs");
    } catch (error) {
        console.log("Error is :- " + error);
    }
}


exports.validateUser = (req, res) => {
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    User.find({ email: userEmail, password: userPassword })
        .then((result) => {
            if (result.length > 0) {
                console.log("Welcome back!");
                res.redirect("/api");
            } else {
                console.log("Invalid email or password.");
            }
        })
        .catch((err) => {
            console.log("Error is: " + err);
        });
};

/*

_id
6682a17f59643f0d2de913d5
name
"csjcb"
email
xbxjzB@gmail.com
password
"3132"
__v
0*/

// Route handler to get user by ID
/*
exports.getAllUsers = (req, res) => {
    res.json(posts);
};
*/

/*
// Route handler to get user by ID
exports.getUserById = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    let post = posts.find(p => p.id === (id));
    if (post) {
        res.status(200).json(post);
    }else{
        res.status(404).json({ message: 'Post not found' });
    }
};
*/

/*
// Route to render the Sign Up Page
exports.newUser = (req, res) =>{
    console.log("Render successfull!")
    res.render("../views/usersViews/signup.ejs");
};
// Route handler to add user to data base 
exports.addNewUser = (req, res) => {
    console.log("Entered post request!");
    let{ id, title, content} = req.body;
    console.log(id);
    console.log(title);
    console.log(content);
}


// route to SingIn user
exports.singInUser = (req, res) => {
    try {
        res.render("../views/usersViews/login.ejs");  // Corrected the file name and path
    } catch (error) {
        console.error("Error:", error);  // Improved error logging
        res.status(500).send("An error occurred while rendering the login page.");  // Added user-friendly error message
    }
};

*/




