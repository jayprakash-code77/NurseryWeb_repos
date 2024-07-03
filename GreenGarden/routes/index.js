const express = require("express");
const router = express.Router();

const userRouter = require("./users");
const plantRouter = require("./plants");
const cartRouter = require("./cart");

router.use("/user", userRouter);
router.use("/plants", plantRouter);
// router.use("/plants/category", plantCategory);
router.use("/user/cart", cartRouter);


// General common routes

// Home page Route
router.get('/', (req, res) => {
    res.render("../views/Home.ejs");
});

// 



module.exports = router;


