        document.addEventListener('DOMContentLoaded', function () {
            // Follow buttons functionality
            const followButtons = document.querySelectorAll('.follow-btn');
            followButtons.forEach(button => {
                button.addEventListener('click', function () {
                    if (this.textContent === 'Follow') {
                        this.textContent = 'Following';
                        this.style.backgroundColor = '#fff';
                        this.style.color = '#425010';
                        this.style.border = '1px solid #425010';
                    } else {
                        this.textContent = 'Follow';
                        this.style.backgroundColor = '#425010';
                        this.style.color = '#fff';
                    }
                });
            });

            // Like buttons functionality
            const likeButtons = document.querySelectorAll('.post-action:nth-child(1)');
            likeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const icon = this.querySelector('i');
                    const countSpan = this.querySelector('span');
                    let count = parseInt(countSpan.textContent);

                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        icon.style.color = '#FF6B6B';
                        countSpan.textContent = count + 1;
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        icon.style.color = '#555';
                        countSpan.textContent = count - 1;
                    }
                });
            });

            // Story like buttons functionality
            const storyLikeButtons = document.querySelectorAll('.story-likes');
            storyLikeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const icon = this.querySelector('i');
                    const countSpan = this.querySelector('span');
                    let count = parseInt(countSpan.textContent);

                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        icon.style.color = '#FF6B6B';
                        countSpan.textContent = count + 1;
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        icon.style.color = '#999';
                        countSpan.textContent = count - 1;
                    }
                });
            });

            // Navigation active state
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function () {
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Create post popup functionality
            const createBtn = document.querySelector('.nav-item:nth-child(3)');
            const createPopup = document.getElementById('createPopup');
            const closePopup = document.getElementById('closePopup');
            const cancelPost = document.getElementById('cancelPost');
            const uploadArea = document.getElementById('uploadArea');
            const fileInput = document.getElementById('fileInput');
            const previewArea = document.getElementById('previewArea');
            const mediaPreview = document.getElementById('mediaPreview');
            const postCaption = document.getElementById('postCaption');
            const sellCheckbox = document.getElementById('sellCheckbox');
            const priceInput = document.getElementById('priceInput');
            const submitPost = document.getElementById('submitPost');

            // Open popup when Create is clicked
            createBtn.addEventListener('click', function (e) {
                e.preventDefault();
                createPopup.style.display = 'flex';
            });

            // Close popup when X or Cancel is clicked
            closePopup.addEventListener('click', closeCreatePopup);
            cancelPost.addEventListener('click', closeCreatePopup);

            function closeCreatePopup() {
                createPopup.style.display = 'none';
                resetPopup();
            }

            function resetPopup() {
                previewArea.style.display = 'none';
                uploadArea.style.display = 'block';
                mediaPreview.innerHTML = '';
                postCaption.value = '';
                sellCheckbox.checked = false;
                priceInput.style.display = 'none';
                submitPost.disabled = true;
            }

            // Handle file upload
            uploadArea.addEventListener('click', () => fileInput.click());

            fileInput.addEventListener('change', handleFileSelect);

            function handleFileSelect(e) {
                const files = e.target.files;
                if (files.length === 0) return;

                uploadArea.style.display = 'none';
                previewArea.style.display = 'block';
                mediaPreview.innerHTML = '';

                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const fileType = file.type.split('/')[0];

                    if (fileType === 'image') {
                        const img = document.createElement('img');
                        img.src = URL.createObjectURL(file);
                        mediaPreview.appendChild(img);
                    } else if (fileType === 'video') {
                        const video = document.createElement('video');
                        video.src = URL.createObjectURL(file);
                        video.controls = true;
                        mediaPreview.appendChild(video);
                    }
                }

                submitPost.disabled = false;
            }

            // Sell checkbox toggle
            sellCheckbox.addEventListener('change', function () {
                priceInput.style.display = this.checked ? 'block' : 'none';
            });

            // Submit post (simulated)
            submitPost.addEventListener('click', function () {
                const caption = postCaption.value;
                const isSellable = sellCheckbox.checked;
                const price = isSellable ? document.getElementById('postPrice').value : null;

                alert('Post created successfully!');
                closeCreatePopup();
            });

            // Drag and drop functionality
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.style.borderColor = '#FF6B6B';
                uploadArea.style.backgroundColor = '#f9f9f9';
            });

            uploadArea.addEventListener('dragleave', () => {
                uploadArea.style.borderColor = '#ccc';
                uploadArea.style.backgroundColor = 'transparent';
            });

            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.style.borderColor = '#ccc';
                uploadArea.style.backgroundColor = 'transparent';

                fileInput.files = e.dataTransfer.files;
                const event = new Event('change');
                fileInput.dispatchEvent(event);
            });
        });
