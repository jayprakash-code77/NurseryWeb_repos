
exports.getCart = (req, res) => {
    console.log("This is your Cart.");
    // res.send("I contain all your plants.");
    res.render("../views/cart.ejs");
}




/*
const express = require('express');
const router = express.Router();

// Mock cart data
let cart = [];

// Add a plant to the cart
router.post('/add', (req, res) => {
    const { plantId, quantity } = req.body;
    const item = { plantId, quantity };
    cart.push(item);
    res.json({ message: "Plant added to cart", cart });
});

// Get cart items
router.get('/', (req, res) => {
    res.json(cart);
});

// Remove a plant from the cart
router.delete('/remove/:plantId', (req, res) => {
    const plantId = req.params.plantId;
    cart = cart.filter(item => item.plantId != plantId);
    res.json({ message: "Plant removed from cart", cart });
});

module.exports = router;
*/