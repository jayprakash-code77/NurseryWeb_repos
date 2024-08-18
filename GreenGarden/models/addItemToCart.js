const Plant = require("./plant");
const User = require("./user");
const Cart = require("./cart");


async function addItemToCart(userId, productId, quantity) {
    try {
        // Find the user and plant to ensure they exist
        const user = await User.findById(userId);
        const plant = await Plant.findById(productId);

        if (!user || !plant) {
            throw new Error("User or Plant not found");
        }

        // Find or create the user's cart
        let cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            cart = new Cart({
                userId: userId,
                items: [],
                totalPrice: 0,
                discountPrice: 0,
                finalPrice: 0
            });
        }

        // Find if the item is already in the cart
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if (itemIndex > -1) {
            // Update quantity and price of existing item
            cart.items[itemIndex].quantity += quantity;
            cart.items[itemIndex].price = plant.price; // Assuming plant has a price field
        } else {
            // Add new item to cart
            cart.items.push({
                productId: productId,
                quantity: quantity,
                price: plant.price // Assuming plant has a price field
            });
        }

        // Calculate prices
        cart.calculatePrices();

        // Save the cart
        await cart.save();

        console.log("Item added to cart successfully!");
    } catch (error) {
        console.error("Error adding item to cart:", error);
    }
};


const userId = "66a4c52c721d33f89756a436"; // Replace with a valid user ID
const productId = "66a4c711da5c8745089382c9"; // Replace with a valid product ID
const quantity = 8;

addItemToCart(userId, productId, quantity);