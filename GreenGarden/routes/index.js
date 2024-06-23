const express = require("express");
const router = express.Router();

const postRouter = require("./user");

router.use("/users", postRouter);


// General common routes

// Home page Route
router.get('/', (req, res) => {
    res.render('../views/Home.ejs');
});


module.exports = router;


