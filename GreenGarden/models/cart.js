const mongoose = require("../config/batabase");
const Plant = require("./plant");
const User = require("./user");


// Cart Item Schema
const cartItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Plant",
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1,
        max: 100
    },
    price: {
        type: Number,
        min: 0,
        required: true
    }
}, {
    timestamps: true
});

// cart Schema 
const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    items: [cartItemSchema],
    totalPrice: {
        type: Number,
        min: 0,
        required: true
    },
    discountPrice: {
        type: Number,
        min: 0
    },
    finalPrice: {
        type: Number,
        min: 0,
        required: true
    }
}, {
    timestamps: true // Optional: adds createdAt and updatedAt timestamps
});


// Method to calculate total price and final price
cartSchema.methods.calculatePrices = function () {
    this.totalPrice = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.finalPrice = this.totalPrice - (this.discountPrice || 0);
};

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
