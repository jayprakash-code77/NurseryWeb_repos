const express = require("express");
const router = express.Router();
const plantControllers = require("../controllers/plantsControllers");


router.get("/category/:category", plantControllers.productByCategory);

module.exports = router;


