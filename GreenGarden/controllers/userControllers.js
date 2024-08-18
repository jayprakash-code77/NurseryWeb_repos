let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

// require mongoose
// const mongoose = require("../config/batabase");

const User = require("../models/user");
const argon2 = require("argon2");
const { hashh } = require("crypto");

// rendering sign up page to user
exports.newUser = (req, res) => {
    try {
        res.render("../views/usersViews/signup.ejs");
    } catch (error) {
        console.log("Error is :- " + error);
    }
}


// asynconious function to convert password to hash code.
async function hashPassword(plaintextPassword) {
    try {
        const hashedPassword = await argon2.hash(plaintextPassword);
        console.log(hashedPassword);
        return hashedPassword;
    } catch (err) {
        console.error('Error while hashing password:', err);
        throw err;
    }
}

exports.addNewUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let hashPass = await hashPassword(password); // Example usage
        let user = new User({
            name: name,
            email: email,
            password: hashPass,
        });

        user
            .save()
            .then((result) => {
                console.log("User singned up!");
            })
            .catch((err) => {
                console.log("Error is :" + err);
            });

        res.redirect("/api");

    } catch (error) {
        res.render("error.ejs");
    }
}

exports.singInUser = (req, res) => {
    try {
        res.render("../views/usersViews/login.ejs");
    } catch (error) {
        console.log("Error is :- " + error);
    }
}

// async function authenticate(storedHash, providedPassword) {
//     try {
//         return await argon2.verify(storedHash, providedPassword);
//     } catch (err) {
//         console.error(err);
//         return false;
//     }
// }

// exports.validateUser = async (req, res) => {
//     let userEmail = req.body.email;
//     let userPassword = req.body.password;

//     try {
//         let user = await User.findOne({ email: userEmail });

//         console.log(user);
//         if (user) {
//             let isAuthenticated = await authenticate(user.password, userPassword); // Assuming `passwordHash` is the stored hash

//             if (isAuthenticated) {
//                 console.log("Authentication successful! Log in successful!.");
//                 res.redirect("/api/");
//             } else {
//                 console.log("Authentication failed! Invalid Password.");
//                 res.redirect("/api/user/signin");
//             }
//         } else {
//             console.log("Email not found! Try to sign up.");
//             res.redirect("/api/user/signup");
//         }
//     } catch (err) {
//         console.log("Error is: " + err);
//         res.status(500).send("Internal server error");
//     }
// };














async function authenticate(storedHash, providedPassword) {
    try {
        if (await argon2.verify(storedHash, providedPassword)) {
            return true; // Password match
        } else {
            return false; // Password does not match
        }
    } catch (err) {
        console.error(err);
        return false;
    }
}


exports.validateUser = async (req, res) => {
    let userEmail = req.body.email;
    let userPassword = req.body.password;

    let data = await User.find({ email: userEmail }).then((result) => {
        if (result.length > 0) {
            DBPass = result[0].password;
        } else {
            console.log("Email not found! Try to sign up.");
        }
    })
        .catch((err) => {
            console.log("Error is: " + err);
        });


    authenticate(DBPass, userPassword).then(isAuthenticated => {
        if (isAuthenticated) {
            console.log("Authentication successful! Log in successful!.");
            res.redirect("/api/");
        } else {
            console.log("Authentication failed! Invalid Password.");
            res.redirect("/api/user/signin");
        }
    })
        .catch((error) => {
            console.log("Error is :" + error);
        })
};

// 

















