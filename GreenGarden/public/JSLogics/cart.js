

// Get references to DOM elements
const cartItemsContainer = document.querySelector(".cart-items");
const subtotalPriceElement = document.getElementById("subtotal-price");
const checkoutBtn = document.getElementById("checkout-btn");

// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Function to render cart items
function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    let subtotal = 0;

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: ₹ ${item.price}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>

            </div>

        `;
        cartItemsContainer.appendChild(cartItem);

        subtotal += item.price * item.quantity;
    });

    subtotalPriceElement.textContent = `₹ ${subtotal}`;
}

// Function to delete a cart item
function deleteCartItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCartItems();
}

// Initialize cart items
renderCartItems();

// Event delegation for delete buttons
cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const index = e.target.getAttribute("data-index");
        deleteCartItem(index);
    }
});

// Proceed to checkout
checkoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("checkoutItems", JSON.stringify(cartItems));
    window.location.href = "/api/user/checkout"; // Replace with your checkout page URL
});
