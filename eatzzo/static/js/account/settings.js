document.addEventListener('DOMContentLoaded', function () {

    // Modal elements
    const passwordModal = document.getElementById('passwordModal');
    const logoutModal = document.getElementById('logoutModal');

    // Open modals
    document.getElementById('changePasswordBtn').addEventListener('click', function () {
        passwordModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('logoutBtn').addEventListener('click', function () {
        logoutModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close modals when clicking X
    document.getElementById('closePasswordModal').addEventListener('click', function () {
        passwordModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    document.getElementById('closeLogoutModal').addEventListener('click', function () {
        logoutModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modals when clicking cancel buttons
    document.getElementById('cancelPasswordBtn').addEventListener('click', function () {
        passwordModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    document.getElementById('cancelLogoutBtn').addEventListener('click', function () {
        logoutModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modals when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === passwordModal) {
            passwordModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === logoutModal) {
            logoutModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Save password functionality
    document.getElementById('savePasswordBtn').addEventListener('click', function () {
        // In a real app, you would validate and save the password here
        alert('Password changed successfully!');
        passwordModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('passwordForm').reset();
    });

    // Logout functionality
    document.getElementById('confirmLogoutBtn').addEventListener('click', function () {
        window.location.href = '/eatzzo/eatzzo/templates/public/index.html';
    });

    // Other settings buttons (would link to other pages in a real app)
    document.getElementById('editProfileBtn').addEventListener('click', function () {
        window.location.href = '/eatzzo/eatzzo/templates/account/edit_profile.html';
    });

    document.getElementById('paymentMethodsBtn').addEventListener('click', function () {
        window.location.href = '/eatzzo/eatzzo/templates/payments/payment.html';
    });

    document.getElementById('addressesBtn').addEventListener('click', function () {
        window.location.href = '/eatzzo/eatzzo/templates/account/address.html';
    });

    document.getElementById('blockedUsersBtn').addEventListener('click', function () {
        window.location.href = '/eatzzo/eatzzo/templates/account/blocked_user.html';
    });

    document.getElementById('helpCenterBtn').addEventListener('click', function () {
        window.location.href = '/eatzzo/eatzzo/templates/account/help.html';
    });

    document.getElementById('aboutBtn').addEventListener('click', function () {
        window.location.href = '/eatzzo/eatzzo/templates/public/ourstory.html';
    });
});
