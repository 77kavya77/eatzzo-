document.addEventListener('DOMContentLoaded', function () {
    // Category navigation
    const categoryBtns = document.querySelectorAll('.category-btn');
    const categoryContents = document.querySelectorAll('.category-content');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Hide all category contents
            categoryContents.forEach(content => content.classList.remove('active'));

            // Show the selected category content
            const categoryId = this.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('active');
        });
    });

    // Save button functionality
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.backgroundColor = '#FFE66D';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.backgroundColor = '#f0f0f0';
            }
        });
    });

    // Sort functionality for each category
    function setupSorting(categoryId) {
        const sortSelect = document.getElementById(`sort-${categoryId}`);
        const productGrid = document.getElementById(`${categoryId}-products`);

        if (sortSelect && productGrid) {
            sortSelect.addEventListener('change', function () {
                const products = Array.from(productGrid.querySelectorAll('.product-card'));

                products.sort((a, b) => {
                    const aPrice = parseFloat(a.getAttribute('data-price'));
                    const bPrice = parseFloat(b.getAttribute('data-price'));
                    const aRating = parseFloat(a.getAttribute('data-rating'));
                    const bRating = parseFloat(b.getAttribute('data-rating'));

                    switch (this.value) {
                        case 'price-low':
                            return aPrice - bPrice;
                        case 'price-high':
                            return bPrice - aPrice;
                        case 'rating':
                            return bRating - aRating;
                        default:
                            return 0; // Keep original order for 'popular'
                    }
                });

                // Remove all products
                while (productGrid.firstChild) {
                    productGrid.removeChild(productGrid.firstChild);
                }

                // Add back sorted products
                products.forEach(product => {
                    productGrid.appendChild(product);
                });
            });
        }
    }

    // Setup sorting for all categories
    ['home-cooked', 'spices', 'pickles', 'baked', 'organic'].forEach(setupSorting);

    // Shopping Cart Functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const subtotalElement = document.querySelector('.subtotal');
    const totalPriceElement = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');

    let cart = [];
    const deliveryFee = 30;

    // Toggle cart sidebar
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');

            addToCart({ id, name, price, image });
        });
    });

    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }

        updateCart();
        cartSidebar.classList.add('open');
    }

    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update cart items
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            subtotalElement.textContent = '₹0.00';
            totalPriceElement.textContent = `₹${deliveryFee.toFixed(2)}`;
            return;
        }

        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${item.name}</h4>
                            <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <button class="remove-item" data-id="${item.id}">&times;</button>
                    `;

            cartItemsContainer.appendChild(cartItemElement);
        });

        // Update totals
        subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
        const total = subtotal + deliveryFee;
        totalPriceElement.textContent = `₹${total.toFixed(2)}`;

        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                const item = cart.find(item => item.id === id);

                if (this.classList.contains('minus')) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        cart = cart.filter(cartItem => cartItem.id !== id);
                    }
                } else if (this.classList.contains('plus')) {
                    item.quantity += 1;
                }

                updateCart();
            });
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                cart = cart.filter(item => item.id !== id);
                updateCart();
            });
        });
    }

    // Checkout functionality
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        alert('Order placed successfully!');
        cart = [];
        updateCart();
        cartSidebar.classList.remove('open');
    });
});
