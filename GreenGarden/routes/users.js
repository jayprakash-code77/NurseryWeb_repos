const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");


// router.get("/", userControllers.getAllUsers); // see all users
// router.get("/:id", userControllers.getUserById); // see user by Id

// Signup route
router.get("/signup", userControllers.newUser); // render form to add new user
router.post("/signup", userControllers.addNewUser); // add user to the data base.

//Signin route
router.get("/signin", userControllers.singInUser);// render the sign in page 
router.post("/signin", userControllers.validateUser);


module.exports = router;

