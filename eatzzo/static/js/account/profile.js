document.addEventListener('DOMContentLoaded', function () {
    // Profile dropdown menu - Fixed version
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Close dropdown when clicking anywhere outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.profile-dropdown')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Toggle dropdown on button click
    dropdownBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the document click handler from closing it immediately
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Profile navigation tabs

    const profileNavItems = document.querySelectorAll('.profile-nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    profileNavItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            profileNavItems.forEach(navItem => navItem.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show the selected tab content
            const tabId = this.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Post modal functionality
    const postModal = document.querySelector('.post-modal');
    const postModalClose = document.querySelector('.post-modal-close');
    const postModalMedia = document.querySelector('.post-modal-media');
    const contentItems = document.querySelectorAll('.content-item');

    // Open modal when post is clicked
    contentItems.forEach(item => {
        item.addEventListener('click', function () {
            // Clear previous media
            postModalMedia.innerHTML = '';

            // Check if it's an image or video
            const img = this.querySelector('img');
            const video = this.querySelector('video');

            if (img) {
                const newImg = img.cloneNode();
                postModalMedia.appendChild(newImg);
            } else if (video) {
                const newVideo = video.cloneNode(true);
                newVideo.controls = true;
                postModalMedia.appendChild(newVideo);
            }

            // Show modal
            postModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal
    postModalClose.addEventListener('click', function () {
        postModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling

        // Pause any videos when closing
        const videos = postModalMedia.querySelectorAll('video');
        videos.forEach(video => video.pause());
    });

    // Close modal when clicking outside
    postModal.addEventListener('click', function (e) {
        if (e.target === postModal) {
            postModal.style.display = 'none';
            document.body.style.overflow = 'auto';

            // Pause any videos when closing
            const videos = postModalMedia.querySelectorAll('video');
            videos.forEach(video => video.pause());
        }
    });

    // Like button functionality in modal
    const likeButton = document.querySelector('.post-modal-action .fa-heart');
    if (likeButton) {
        likeButton.addEventListener('click', function () {
            this.classList.toggle('far');
            this.classList.toggle('fas');
        });
    }
});
