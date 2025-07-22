document.addEventListener('DOMContentLoaded', function () {
    // Profile picture change functionality
    const profilePicture = document.getElementById('profilePicture');
    const changePictureBtn = document.getElementById('changePictureBtn');
    const deletePictureBtn = document.getElementById('deletePictureBtn');
    const pictureUpload = document.getElementById('pictureUpload');

    // Change picture button click
    changePictureBtn.addEventListener('click', function () {
        pictureUpload.click();
    });

    // Handle picture upload
    pictureUpload.addEventListener('change', function (e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = function (event) {
                profilePicture.src = event.target.result;
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // Delete picture button click
    deletePictureBtn.addEventListener('click', function () {
        if (confirm('Are you sure you want to delete your profile picture?')) {
            profilePicture.src = 'https://via.placeholder.com/150';
        }
    });

    // Form submission
    const editForm = document.querySelector('.edit-profile-form');
    const cancelBtn = document.querySelector('.cancel-btn');

    editForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Profile updated successfully!');
        // In a real app, you would send the data to your backend here
    });

    cancelBtn.addEventListener('click', function () {
        if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
            // In a real app, you might redirect back to the profile page
            window.location.href = 'profile.html';
        }
    });

    // District dropdown based on state selection
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');

    // In a real app, you might have different districts for each state
    // This is just a simplified version for Kerala
});
