        document.addEventListener('DOMContentLoaded', function () {
            // Follow buttons functionality
            const followButtons = document.querySelectorAll('.follow-btn');
            followButtons.forEach(button => {
                button.addEventListener('click', function () {
                    if (this.textContent === 'Follow') {
                        this.textContent = 'Following';
                        this.classList.add('following');
                    } else {
                        this.textContent = 'Follow';
                        this.classList.remove('following');
                    }
                });
            });

            // Navigation items
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function () {
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });
