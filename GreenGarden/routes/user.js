const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");





router.get("/new", userControllers.newUser); // render form to add new user
router.get("/", userControllers.getAllUsers); // see all users
router.get("/:id", userControllers.getUserById); // see user by Id
router.post("/", userControllers.addUser); // render form to add 

module.exports = router;