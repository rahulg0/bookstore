
let cartItems = [];

// Function to add an item to the cart
function addToCart(bookName, price) {
    const item = { name: bookName, price: price };
    cartItems.push(item);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price;
    });

    totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
}

// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('button[Add\\ to\\ cart]');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const bookName = button.previousElementSibling.textContent;
        const price = parseFloat(prompt(`Enter the price for ${bookName}:`));
        if (!isNaN(price)) {
            addToCart(bookName, price);
        }
    });
});