document.addEventListener('DOMContentLoaded', function () {
    const ordersContainer = document.getElementById('ordersContainer');
    const emptyState = document.getElementById('emptyState');
    const exploreBtn = document.getElementById('exploreBtn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Sample orders data
    let orders = [
        {
            id: "EZ-2023-0456",
            date: "15 Oct 2023 at 12:30 PM",
            status: "Delivered",
            items: [
                {
                    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name: "Homemade Pasta with Tomato Basil Sauce",
                    chef: "Chef Maria",
                    price: "₹350",
                    quantity: 1
                }
            ],
            subtotal: "₹350",
            delivery: "₹40",
            total: "₹390",
            actions: ["reorder", "review", "delete"]
        },
        {
            id: "EZ-2023-0455",
            date: "14 Oct 2023 at 7:15 PM",
            status: "Processing",
            items: [
                {
                    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name: "Mediterranean Salad Bowl",
                    chef: "Chef Antonio",
                    price: "₹280",
                    quantity: 2
                },
                {
                    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name: "Garlic Bread",
                    chef: "Chef Antonio",
                    price: "₹120",
                    quantity: 1
                }
            ],
            subtotal: "₹680",
            delivery: "₹40",
            total: "₹720",
            actions: ["track", "cancel", "delete"]
        },
        {
            id: "EZ-2023-0432",
            date: "10 Oct 2023 at 1:45 PM",
            status: "Cancelled",
            items: [
                {
                    image: "img/idli.png",
                    name: "Traditional Idli with Sambar",
                    chef: "Chef Priya",
                    price: "₹180",
                    quantity: 2
                },
                {
                    image: "img/kallappam.png",
                    name: "Kallappam with Stew",
                    chef: "Chef Priya",
                    price: "₹220",
                    quantity: 1
                }
            ],
            subtotal: "₹580",
            delivery: "₹0",
            total: "₹580",
            actions: ["reorder", "delete"]
        }
    ];

    // Function to render orders
    function renderOrders(ordersToRender) {
        ordersContainer.innerHTML = '';

        if (ordersToRender.length === 0) {
            emptyState.style.display = 'block';
            ordersContainer.style.display = 'none';
            return;
        }

        emptyState.style.display = 'none';
        ordersContainer.style.display = 'flex';

        ordersToRender.forEach(order => {
            const orderCard = document.createElement('div');
            orderCard.className = 'order-card';

            // Determine status class
            let statusClass = '';
            if (order.status === 'Delivered') statusClass = 'status-delivered';
            else if (order.status === 'Processing') statusClass = 'status-processing';
            else if (order.status === 'Cancelled') statusClass = 'status-cancelled';

            // Create order header
            orderCard.innerHTML = `
                        <div class="order-header">
                            <div>
                                <div class="order-id">Order #${order.id}</div>
                                <div class="order-date">Placed on ${order.date}</div>
                            </div>
                            <div class="order-status ${statusClass}">${order.status}</div>
                        </div>
                        <div class="order-body"></div>
                    `;

            const orderBody = orderCard.querySelector('.order-body');

            // Add order items
            order.items.forEach(item => {
                orderBody.innerHTML += `
                            <div class="order-item">
                                <img src="${item.image}" alt="${item.name}" class="item-image">
                                <div class="item-details">
                                    <div class="item-name">${item.name}</div>
                                    <div class="item-chef">by ${item.chef}</div>
                                    <div class="item-price">${item.price}</div>
                                    <div class="item-quantity">Quantity: ${item.quantity}</div>
                                </div>
                            </div>
                        `;
            });

            // Add order summary
            orderBody.innerHTML += `
                        <div class="order-summary">
                            <div class="summary-label">Subtotal</div>
                            <div class="summary-value">${order.subtotal}</div>
                        </div>
                        <div class="order-summary">
                            <div class="summary-label">Delivery Fee</div>
                            <div class="summary-value">${order.delivery}</div>
                        </div>
                        <div class="order-summary">
                            <div class="summary-label">Total Amount</div>
                            <div class="summary-value">${order.total}</div>
                        </div>
                    `;

            // Add order actions
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'order-actions';

            order.actions.forEach(action => {
                if (action === 'reorder') {
                    actionsDiv.innerHTML += `<button class="action-btn reorder-btn">Reorder</button>`;
                } else if (action === 'review') {
                    actionsDiv.innerHTML += `<button class="action-btn review-btn">Leave Review</button>`;
                } else if (action === 'track') {
                    actionsDiv.innerHTML += `<button class="action-btn reorder-btn">Track Order</button>`;
                } else if (action === 'cancel') {
                    actionsDiv.innerHTML += `<button class="action-btn review-btn">Cancel Order</button>`;
                } else if (action === 'delete') {
                    actionsDiv.innerHTML += `<button class="action-btn delete-btn">Delete</button>`;
                }
            });

            orderCard.appendChild(actionsDiv);
            ordersContainer.appendChild(orderCard);
        });

        // Attach event listeners to all action buttons
        attachEventListeners();
    }

    // Function to attach event listeners
    function attachEventListeners() {
        document.querySelectorAll('.reorder-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const orderId = this.closest('.order-card').querySelector('.order-id').textContent;
                alert(`Reordering: ${orderId}`);
            });
        });

        document.querySelectorAll('.review-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const orderCard = this.closest('.order-card');
                const orderId = orderCard.querySelector('.order-id').textContent;

                if (this.textContent === 'Leave Review') {
                    alert(`Opening review form for: ${orderId}`);
                } else if (this.textContent === 'Cancel Order') {
                    if (confirm('Are you sure you want to cancel this order?')) {
                        // Update the order status in our data
                        const orderIndex = orders.findIndex(o => `Order #${o.id}` === orderId);
                        if (orderIndex !== -1) {
                            orders[orderIndex].status = 'Cancelled';
                            orders[orderIndex].actions = ['reorder', 'delete'];
                            renderOrders(orders); // Re-render with updated data
                        }
                    }
                }
            });
        });

        // Delete button functionality
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const orderCard = this.closest('.order-card');
                const orderId = orderCard.querySelector('.order-id').textContent;

                if (confirm('Are you sure you want to delete this order?')) {
                    // Remove the order from our data
                    orders = orders.filter(o => `Order #${o.id}` !== orderId);

                    // Re-render orders
                    const activeFilter = document.querySelector('.filter-btn.active').textContent.toLowerCase();
                    let filteredOrders = [];

                    if (activeFilter === 'all') {
                        filteredOrders = orders;
                    } else {
                        filteredOrders = orders.filter(order =>
                            order.status.toLowerCase() === activeFilter
                        );
                    }

                    renderOrders(filteredOrders);
                }
            });
        });
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get the filter type
            const filter = this.textContent.toLowerCase();

            // Filter orders
            let filteredOrders = [];
            if (filter === 'all') {
                filteredOrders = orders;
            } else {
                filteredOrders = orders.filter(order =>
                    order.status.toLowerCase() === filter
                );
            }

            // Render filtered orders
            renderOrders(filteredOrders);
        });
    });

    // Explore button functionality
    exploreBtn.addEventListener('click', function () {
        window.location.href = 'market.html'; // Uncomment in real implementation
    });

    // Initial render - show all orders
    renderOrders(orders);
});
