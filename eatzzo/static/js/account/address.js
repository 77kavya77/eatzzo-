document.addEventListener('DOMContentLoaded', function () {
    // Modal elements
    const addressModal = document.getElementById('addressModal');
    const deleteModal = document.getElementById('deleteModal');
    const addressTypeBtns = document.querySelectorAll('.address-type-btn');
    const modalTitle = document.getElementById('modalTitle');

    // Address data
    let addresses = [
        {
            id: 1,
            type: 'home',
            title: 'Home',
            fullName: 'John Doe',
            line1: '123 Main Street, Apt 4B',
            line2: '',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'US',
            phone: '+1 (555) 123-4567',
            isDefault: true,
            addressType: 'Primary'
        },
        {
            id: 2,
            type: 'work',
            title: 'Work',
            fullName: 'John Doe',
            line1: '456 Business Avenue, Floor 12',
            line2: '',
            city: 'New York',
            state: 'NY',
            zipCode: '10005',
            country: 'US',
            phone: '+1 (555) 987-6543',
            isDefault: false,
            addressType: 'Secondary'
        }
    ];

    // Address type selection
    addressTypeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            addressTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Open add address modal
    document.getElementById('addAddressBtn').addEventListener('click', function () {
        modalTitle.textContent = 'Add New Address';
        document.getElementById('addressForm').reset();
        addressModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('addAddressEmptyBtn').addEventListener('click', function () {
        modalTitle.textContent = 'Add New Address';
        document.getElementById('addressForm').reset();
        addressModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close add address modal
    document.getElementById('closeAddressModal').addEventListener('click', function () {
        addressModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    document.getElementById('cancelAddressBtn').addEventListener('click', function () {
        addressModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Save address
    document.getElementById('saveAddressBtn').addEventListener('click', function () {
        // In a real app, you would validate and save the address here
        alert('Address saved successfully!');
        addressModal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Hide empty state if it's shown
        document.getElementById('emptyState').style.display = 'none';
    });

    // Delete address functionality
    let currentAddressIdToDelete = null;

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            currentAddressIdToDelete = this.getAttribute('data-id');
            const address = addresses.find(a => a.id == currentAddressIdToDelete);

            // Set the preview text in the modal
            document.getElementById('addressPreview').innerHTML = `
                        <strong>${address.title}</strong><br>
                        ${address.line1}<br>
                        ${address.city}, ${address.state} ${address.zipCode}<br>
                        ${address.phone}
                    `;

            deleteModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close delete modal
    document.getElementById('closeDeleteModal').addEventListener('click', function () {
        deleteModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentAddressIdToDelete = null;
    });

    document.getElementById('cancelDeleteBtn').addEventListener('click', function () {
        deleteModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentAddressIdToDelete = null;
    });

    // Confirm delete
    document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
        if (currentAddressIdToDelete) {
            // In a real app, you would delete the address from the server here
            addresses = addresses.filter(a => a.id != currentAddressIdToDelete);

            // If this was the default, set another one as default
            if (addresses.length > 0 && addresses.every(a => !a.isDefault)) {
                addresses[0].isDefault = true;
            }

            // Re-render addresses
            renderAddresses();

            // Show empty state if no addresses left
            if (addresses.length === 0) {
                document.getElementById('emptyState').style.display = 'block';
            }

            alert('Address deleted successfully!');
            deleteModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentAddressIdToDelete = null;
        }
    });

    // Edit address functionality
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const addressId = this.getAttribute('data-id');
            const address = addresses.find(a => a.id == addressId);

            // Set modal title
            modalTitle.textContent = 'Edit Address';

            // Fill form with address data
            document.getElementById('addressTitle').value = address.title;
            document.getElementById('fullName').value = address.fullName;
            document.getElementById('addressLine1').value = address.line1;
            document.getElementById('addressLine2').value = address.line2;
            document.getElementById('city').value = address.city;
            document.getElementById('state').value = address.state;
            document.getElementById('zipCode').value = address.zipCode;
            document.getElementById('country').value = address.country;
            document.getElementById('phoneNumber').value = address.phone;
            document.getElementById('setDefault').checked = address.isDefault;

            // Set address type
            addressTypeBtns.forEach(b => b.classList.remove('active'));
            document.querySelector(`.address-type-btn[data-type="${address.type}"]`).classList.add('active');

            // Show modal
            addressModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === addressModal) {
            addressModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === deleteModal) {
            deleteModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentAddressIdToDelete = null;
        }
    });

    // Function to render addresses
    function renderAddresses() {
        const container = document.getElementById('addressesContainer');
        container.innerHTML = '';

        addresses.forEach(address => {
            const addressElement = document.createElement('div');
            addressElement.className = 'address-card';

            // Determine icon based on address type
            let icon = 'fa-map-marker-alt';
            if (address.type === 'home') icon = 'fa-home';
            else if (address.type === 'work') icon = 'fa-briefcase';
            else if (address.type === 'other') icon = 'fa-warehouse';

            addressElement.innerHTML = `
                        <div class="address-header">
                            <div class="address-title">
                                <i class="fas ${icon}"></i> ${address.title}
                                ${address.isDefault ? '<span class="default-badge">Default</span>' : ''}
                            </div>
                            <div class="address-type">${address.addressType}</div>
                        </div>
                        <div class="address-details">
                            <div>${address.fullName}</div>
                            <div>${address.line1}</div>
                            ${address.line2 ? `<div>${address.line2}</div>` : ''}
                            <div>${address.city}, ${address.state} ${address.zipCode}</div>
                            <div>${getCountryName(address.country)}</div>
                            <div>Phone: ${address.phone}</div>
                        </div>
                        <div class="address-actions">
                            <button class="action-btn edit-btn" data-id="${address.id}">
                                <i class="far fa-edit"></i> Edit
                            </button>
                            <button class="action-btn delete-btn" data-id="${address.id}">
                                <i class="far fa-trash-alt"></i> Delete
                            </button>
                        </div>
                    `;

            container.appendChild(addressElement);
        });

        // Reattach event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                currentAddressIdToDelete = this.getAttribute('data-id');
                const address = addresses.find(a => a.id == currentAddressIdToDelete);

                document.getElementById('addressPreview').innerHTML = `
                            <strong>${address.title}</strong><br>
                            ${address.line1}<br>
                            ${address.city}, ${address.state} ${address.zipCode}<br>
                            ${address.phone}
                        `;

                deleteModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // Reattach event listeners to edit buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const addressId = this.getAttribute('data-id');
                const address = addresses.find(a => a.id == addressId);

                modalTitle.textContent = 'Edit Address';
                document.getElementById('addressTitle').value = address.title;
                document.getElementById('fullName').value = address.fullName;
                document.getElementById('addressLine1').value = address.line1;
                document.getElementById('addressLine2').value = address.line2;
                document.getElementById('city').value = address.city;
                document.getElementById('state').value = address.state;
                document.getElementById('zipCode').value = address.zipCode;
                document.getElementById('country').value = address.country;
                document.getElementById('phoneNumber').value = address.phone;
                document.getElementById('setDefault').checked = address.isDefault;

                addressTypeBtns.forEach(b => b.classList.remove('active'));
                document.querySelector(`.address-type-btn[data-type="${address.type}"]`).classList.add('active');

                addressModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Helper function to get country name from code
    function getCountryName(code) {
        const countries = {
            'US': 'United States',
            'IN': 'India',
            'UK': 'United Kingdom',
            'CA': 'Canada'
        };
        return countries[code] || code;
    }

    // Initial render
    renderAddresses();
});
