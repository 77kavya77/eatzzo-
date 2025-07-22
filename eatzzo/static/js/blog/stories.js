document.addEventListener('DOMContentLoaded', function () {
    // Form popup functionality
    const showFormBtn = document.getElementById('showFormBtn');
    const storyForm = document.getElementById('storyForm');
    const formOverlay = document.getElementById('formOverlay');
    const closeForm = document.getElementById('closeForm');
    const cancelForm = document.getElementById('cancelForm');

    showFormBtn.addEventListener('click', function () {
        storyForm.style.display = 'block';
        formOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    function closePopupForm() {
        storyForm.style.display = 'none';
        formOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeForm.addEventListener('click', closePopupForm);
    cancelForm.addEventListener('click', closePopupForm);
    formOverlay.addEventListener('click', closePopupForm);

    // Form submission
    const submitForm = document.getElementById('submitStoryForm');
    submitForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you would normally send the data to your backend
        alert('Thank you for sharing your kitchen story! It will be reviewed and published soon.');
        closePopupForm();
        submitForm.reset();
    });

    // Like functionality for stories
    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const countSpan = this.nextElementSibling;
            let count = parseInt(countSpan.textContent);

            if (this.classList.contains('far')) {
                this.classList.remove('far');
                this.classList.add('fas');
                this.style.color = '#FF6B6B';
                countSpan.textContent = count + 1;
            } else {
                this.classList.remove('fas');
                this.classList.add('far');
                this.style.color = '#888';
                countSpan.textContent = count - 1;
            }
        });
    });
});
