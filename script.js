// script.js

async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const menuData = await response.json();
        const menuElement = document.getElementById('menu');
        menuElement.innerHTML = ''; // Clear previous content

        menuData.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button>Add to Cart</button>
            `;
            menuElement.appendChild(menuItem);
        });
    } catch (error) {
        console.error('Error fetching menu:', error);
        document.getElementById('menu').textContent = 'Failed to load menu.';
    }
}

window.onload = getMenu;
