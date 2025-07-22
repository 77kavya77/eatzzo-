document.addEventListener('DOMContentLoaded', function () {

    // Modal elements
    const unblockModal = document.getElementById('unblockModal');
    const blockedUsersList = document.getElementById('blockedUsersList');
    const emptyState = document.getElementById('emptyState');

    // Sample blocked users data
    let blockedUsers = [
        {
            id: 1,
            name: "John Smith",
            username: "@johnsmith",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            username: "@sarahj",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Michael Brown",
            username: "@michaelb",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg"
        }
    ];

    // Current user to unblock
    let currentUnblockUserId = null;

    // Render blocked users
    function renderBlockedUsers() {
        blockedUsersList.innerHTML = '';

        if (blockedUsers.length === 0) {
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';

        blockedUsers.forEach(user => {
            const userElement = document.createElement('li');
            userElement.className = 'blocked-user';
            userElement.innerHTML = `
                        <img src="${user.avatar}" alt="User" class="user-avatar">
                        <div class="user-info">
                            <div class="user-name">${user.name}</div>
                            <div class="user-username">${user.username}</div>
                        </div>
                        <button class="unblock-btn" data-user-id="${user.id}">
                            <i class="fas fa-unlock"></i> Unblock
                        </button>
                    `;
            blockedUsersList.appendChild(userElement);
        });

        // Add event listeners to unblock buttons
        document.querySelectorAll('.unblock-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const userId = this.getAttribute('data-user-id');
                const user = blockedUsers.find(u => u.id == userId);

                // Set the username in the modal
                document.getElementById('unblockUserName').textContent = user.username;

                // Store the current user ID to unblock
                currentUnblockUserId = userId;

                // Show the modal
                unblockModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Close unblock modal
    document.getElementById('closeUnblockModal').addEventListener('click', function () {
        unblockModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentUnblockUserId = null;
    });

    document.getElementById('cancelUnblockBtn').addEventListener('click', function () {
        unblockModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentUnblockUserId = null;
    });

    // Confirm unblock
    document.getElementById('confirmUnblockBtn').addEventListener('click', function () {
        if (currentUnblockUserId) {
            // In a real app, you would send a request to unblock the user here
            blockedUsers = blockedUsers.filter(user => user.id != currentUnblockUserId);

            // Re-render the list
            renderBlockedUsers();

            alert('User has been unblocked successfully!');
            unblockModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentUnblockUserId = null;
        }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === unblockModal) {
            unblockModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentUnblockUserId = null;
        }
    });

    // Initial render
    renderBlockedUsers();
});
