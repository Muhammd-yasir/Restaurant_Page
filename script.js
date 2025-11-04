const menuItems = [
    {
        id: 1,
        name: "Bruschetta",
        category: "starters",
        price: 8.99,
        description: "Toasted bread toppped with tomatoes, garlic and fresh basil",
        image: "Images/Bruschetta.jpg"
    },
    {
        id: 2,
        name: "Calamari",
        category: "starters",
        price: 12.99,
        description: "Crispy fried squid served with lemon",
        image: "Images/Calamari.jpg"
    },
    {
        id: 3,
        name: "Caprese Salad",
        category: "starters",
        price: 10.99,
        description: "Fresh mozarilla with tomatoes and basil",
        image: "Images/Caprese-salad.jpg"
    },
    {
        id: 4,
        name: "Grilled Salmon",
        category: "main",
        price: 24.99,
        description: "Roasted salmon with lemon butter sause and vegetables",
        image: "Images/Grilled-salmon.jpg"
    },
    {
        id: 5,
        name: "Filet Mignon",
        category: "main",
        price: 32.99,
        description: "Tender beef with mash potatoes",
        image: "Images/Filet Mignon.jpg"
    },
    {
        id: 6,
        name: "Mushroom Risoto",
        category: "main",
        price: 18.99,
        description: "Creamy rice with wild mashrooms and parmesan",
        image: "Images/Mushroom-Risotto.jpg"
    },
    {
        id: 7,
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: 9.99,
        description: "Warm chocolate cake with warm center",
        image: "Images/Chocolate-Lava-Cake.jpg"
    },
    {
        id: 8,
        name: "Ice-Cream",
        category: "desserts",
        price: 8.99,
        description: "All flavoured ice-cream with crispy toppings",
        image: "Images/Ice-cream.jpg"
    },
    {
        id: 9,
        name: "Custurds & Pudding",
        category: "desserts",
        price: 9.99,
        description: "Custured made with based cream milked with puddings",
        image: "Images/Custurd-pudding.jpg"
    },
    {
        id: 10,
        name: "Cock-Tails",
        category: "drinks",
        price: 6.99,
        description: "Cocktails made with premium spirits and freshed ingredients",
        image: "Images/Cocktails.jpg"
    },
    {
        id: 11,
        name: "Juices",
        category: "drinks",
        price: 5.99,
        description: "Freshley squezed juice of all fruits",
        image: "Images/Juice.jpg"
    },
    {
        id: 12,
        name: "Milkshakes",
        category: "drinks",
        price: 4.99,
        description: "Freshley made milkshakes",
        image: "Images/Milkshakes.jpg"
    },
    {
        id: 13,
        name: "BBQ",
        category: "course",
        price: 15.99,
        description: "Traditional BBQ",
        image: "Images/BBQ.jpg"
    },
    {
        id: 14,
        name: "Karahi",
        category: "course",
        price: 20.99,
        description: "Traditional spicy karahi in beef, mutton and chicken",
        image: "Images/Karahi.jpg"
    },
    {
        id: 15,
        name: "Biryani",
        category: "course",
        price: 15.99,
        description: "Spice biryani with salad",
        image: "Images/Biryani.jpg"
    },
];

const menuGrid = document.getElementById("menu-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function displayMenuItems(items) {
    menuGrid.innerHTML = '';

    if (items.length === 0) {
        menuGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; font-size: 1.2rem;">No items found matching your criteria.</p>';
        return;
    }

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.setAttribute('data-category', item.category);

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-price">
                    <span class="price">$${item.price.toFixed(2)}</span>
                </div>
            </div>
        `;

        menuGrid.appendChild(menuItem);
    });
}

function filterbyCategory(category){
    if(category === 'all'){
        displayMenuItems(menuItems);
    }
    else{
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenuItems(filteredItems);
    }
};

function searchMenu(){
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === ''){
        const activeCategory = document.querySelector(".filter-btn.active").dataset.category;
        filterbyCategory(activeCategory);
        return; 
    }

    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );

    displayMenuItems(filteredItems);
};

filterBtns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        filterBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        filterbyCategory(btn.dataset.category);
    });
});

searchBtn.addEventListener('click', searchMenu);
searchInput.addEventListener('keyup', searchMenu);

hamburger.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
});

displayMenuItems(menuItems);
