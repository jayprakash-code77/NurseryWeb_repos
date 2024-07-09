const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartsControllers");


router.get("/", cartController.getCart);

module.exports = router;

