// This file contains the JavaScript code for the pizzeria website.
// It handles interactivity, such as menu display, order functionality, and any dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: 'Margherita', price: 8.99 },
        { name: 'Pepperoni', price: 9.99 },
        { name: 'Vegetarian', price: 10.99 },
        { name: 'Hawaiian', price: 11.99 },
    ];

    const menuContainer = document.getElementById('menu');
    const orderButton = document.getElementById('order-button');
    const orderSummary = document.getElementById('order-summary');

    function displayMenu() {
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `<h3>${item.name}</h3><p>Price: $${item.price.toFixed(2)}</p>`;
            menuContainer.appendChild(menuItem);
        });
    }

    function handleOrder() {
        orderSummary.innerHTML = 'Thank you for your order!';
    }

    orderButton.addEventListener('click', handleOrder);
    displayMenu();
});