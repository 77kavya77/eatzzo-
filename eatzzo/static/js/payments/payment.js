document.addEventListener('DOMContentLoaded', function () {

    // Modal elements
    const addPaymentModal = document.getElementById('addPaymentModal');
    const deleteModal = document.getElementById('deleteModal');
    const paymentType = document.getElementById('paymentType');
    const creditCardFields = document.getElementById('creditCardFields');
    const paypalFields = document.getElementById('paypalFields');
    const upiFields = document.getElementById('upiFields');

    // Payment methods data
    let paymentMethods = [
        {
            id: 1,
            type: 'credit',
            icon: 'far fa-credit-card',
            iconClass: 'credit-card',
            title: 'Visa •••• 4242',
            subtitle: 'Expires 04/2025',
            isDefault: true
        },
        {
            id: 2,
            type: 'paypal',
            icon: 'fab fa-paypal',
            iconClass: 'paypal',
            title: 'PayPal',
            subtitle: 'user@example.com',
            isDefault: false
        },
        {
            id: 3,
            type: 'upi',
            icon: 'fas fa-mobile-alt',
            iconClass: 'upi',
            title: 'UPI',
            subtitle: 'user@upi',
            isDefault: false
        }
    ];

    // Toggle payment method fields based on selection
    paymentType.addEventListener('change', function () {
        const value = this.value;

        // Hide all fields first
        creditCardFields.style.display = 'none';
        paypalFields.style.display = 'none';
        upiFields.style.display = 'none';

        // Show the selected fields
        if (value === 'credit') {
            creditCardFields.style.display = 'block';
        } else if (value === 'paypal') {
            paypalFields.style.display = 'block';
        } else if (value === 'upi') {
            upiFields.style.display = 'block';
        }
    });

    // Open add payment modal
    document.getElementById('addPaymentBtn').addEventListener('click', function () {
        addPaymentModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('addPaymentEmptyBtn').addEventListener('click', function () {
        addPaymentModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close add payment modal
    document.getElementById('closeAddPaymentModal').addEventListener('click', function () {
        addPaymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    document.getElementById('cancelAddPaymentBtn').addEventListener('click', function () {
        addPaymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Save payment method
    document.getElementById('savePaymentBtn').addEventListener('click', function () {
        // In a real app, you would validate and save the payment method here
        alert('Payment method added successfully!');
        addPaymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('paymentForm').reset();

        // Hide empty state if it's shown
        document.getElementById('emptyState').style.display = 'none';
    });

    // Delete payment method functionality
    let currentPaymentIdToDelete = null;

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            currentPaymentIdToDelete = this.getAttribute('data-id');
            const paymentMethod = paymentMethods.find(p => p.id == currentPaymentIdToDelete);

            // Set the preview text in the modal
            document.getElementById('paymentMethodPreview').textContent =
                `${paymentMethod.title} (${paymentMethod.subtitle})`;

            deleteModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close delete modal
    document.getElementById('closeDeleteModal').addEventListener('click', function () {
        deleteModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentPaymentIdToDelete = null;
    });

    document.getElementById('cancelDeleteBtn').addEventListener('click', function () {
        deleteModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentPaymentIdToDelete = null;
    });

    // Confirm delete
    document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
        if (currentPaymentIdToDelete) {
            // In a real app, you would delete the payment method from the server here
            paymentMethods = paymentMethods.filter(p => p.id != currentPaymentIdToDelete);

            // If this was the default, set another one as default
            if (paymentMethods.length > 0 && paymentMethods.every(p => !p.isDefault)) {
                paymentMethods[0].isDefault = true;
            }

            // Re-render payment methods
            renderPaymentMethods();

            // Show empty state if no payment methods left
            if (paymentMethods.length === 0) {
                document.getElementById('emptyState').style.display = 'block';
            }

            alert('Payment method deleted successfully!');
            deleteModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentPaymentIdToDelete = null;
        }
    });

    // Close modals when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === addPaymentModal) {
            addPaymentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === deleteModal) {
            deleteModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentPaymentIdToDelete = null;
        }
    });

    // Function to render payment methods
    function renderPaymentMethods() {
        const container = document.getElementById('paymentMethodsContainer');
        container.innerHTML = '';

        paymentMethods.forEach(method => {
            const methodElement = document.createElement('div');
            methodElement.className = 'payment-method';

            methodElement.innerHTML = `
                        <div class="payment-info">
                            <div class="payment-icon ${method.iconClass}">
                                <i class="${method.icon}"></i>
                            </div>
                            <div class="payment-details">
                                <h3>${method.title} ${method.isDefault ? '<span class="default-badge">Default</span>' : ''}</h3>
                                <p>${method.subtitle}</p>
                            </div>
                        </div>
                        <div class="payment-actions">
                            <button class="action-btn edit-btn" data-id="${method.id}">
                                <i class="far fa-edit"></i>
                            </button>
                            <button class="action-btn delete-btn" data-id="${method.id}">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>
                    `;

            container.appendChild(methodElement);
        });

        // Reattach event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                currentPaymentIdToDelete = this.getAttribute('data-id');
                const paymentMethod = paymentMethods.find(p => p.id == currentPaymentIdToDelete);

                document.getElementById('paymentMethodPreview').textContent =
                    `${paymentMethod.title} (${paymentMethod.subtitle})`;

                deleteModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // Attach edit button event listeners
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const paymentId = this.getAttribute('data-id');
                alert(`Editing payment method ${paymentId}. This would open an edit form in a real app.`);
            });
        });
    }

    // Initial render
    renderPaymentMethods();
});
