document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Display cart items on the page
    const cartItemsContainer = document.getElementById('cart-items');
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
    });

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;

    // Handle checkout button click
    document.getElementById('checkout-btn').addEventListener('click', function() {
        // Perform checkout process (e.g., send order details to server, redirect to payment gateway, etc.)
        alert('Redirecting to payment gateway...');
        // Clear cart items after checkout
        localStorage.removeItem('cartItems');
        // Redirect to thank you page or homepage
        window.location.href = 'thank-you.html';
    });
});
