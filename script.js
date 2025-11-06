const menuItems = [
    {
        id: 1,
        name: "Bruschetta",
        category: "starters",
        price: 8.99,
        description: "Toasted bread topped with tomatoes, garlic and fresh basil",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Calamari",
        category: "starters",
        price: 12.99,
        description: "Crispy fried squid served with lemon aioli",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Caprese Salad",
        category: "starters",
        price: 10.99,
        description: "Fresh mozzarella with tomatoes and basil",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Grilled Salmon",
        category: "main",
        price: 24.99,
        description: "Roasted salmon with lemon butter sauce and seasonal vegetables",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Filet Mignon",
        category: "main",
        price: 32.99,
        description: "Tender beef with mashed potatoes and red wine reduction",
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Mushroom Risotto",
        category: "main",
        price: 18.99,
        description: "Creamy arborio rice with wild mushrooms and parmesan",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: 9.99,
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Ice Cream",
        category: "desserts",
        price: 8.99,
        description: "Artisanal ice cream with assorted toppings",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Crème Brûlée",
        category: "desserts",
        price: 9.99,
        description: "Classic vanilla custard with caramelized sugar crust",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Cocktails",
        category: "drinks",
        price: 12.99,
        description: "Signature cocktails made with premium spirits and fresh ingredients",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Fresh Juices",
        category: "drinks",
        price: 5.99,
        description: "Freshly squeezed juices from seasonal fruits",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Milkshakes",
        category: "drinks",
        price: 6.99,
        description: "Creamy milkshakes in various flavors",
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "BBQ Platter",
        category: "course",
        price: 25.99,
        description: "Mixed grill platter with traditional barbecue favorites",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Chicken Karahi",
        category: "course",
        price: 20.99,
        description: "Traditional spicy karahi with chicken, herbs and spices",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Biryani",
        category: "course",
        price: 18.99,
        description: "Fragrant basmati rice with spiced meat and herbs",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
];

const menuGrid = document.getElementById("menu-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayMenuItems(items) {
    menuGrid.innerHTML = '';

    if (items.length === 0) {
        const noItems = document.createElement('div');
        noItems.classList.add('no-items');
        noItems.textContent = 'No items found matching your criteria.';
        menuGrid.appendChild(noItems);
        return;
    }

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.setAttribute('data-category', item.category);

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
            <div class="item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-price">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;

        menuGrid.appendChild(menuItem);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function filterByCategory(category) {
    if (category === 'all') {
        displayMenuItems(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenuItems(filteredItems);
    }
}

function searchMenu() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        const activeCategory = document.querySelector(".filter-btn.active").dataset.category;
        filterByCategory(activeCategory);
        return;
    }

    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );

    displayMenuItems(filteredItems);
}

function addToCart(event) {
    const itemId = parseInt(event.currentTarget.getAttribute('data-id'));
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    
    if (item) {
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...item, quantity: 1});
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        const button = event.currentTarget;
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
        }, 1500);
        
        console.log(`Added ${item.name} to cart`);
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        filterByCategory(btn.dataset.category);
    });
});

searchBtn.addEventListener('click', searchMenu);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchMenu();
    }
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

displayMenuItems(menuItems);