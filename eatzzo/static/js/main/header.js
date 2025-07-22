document.addEventListener('DOMContentLoaded', function () {
    // Create navbar container
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    navbar.style.position = 'fixed';
    navbar.style.left = '0';
    navbar.style.top = '0';
    navbar.style.width = '250px';
    navbar.style.height = '100vh';
    navbar.style.backgroundColor = '#fff';
    navbar.style.color = 'white';
    navbar.style.textAlign = 'center';
    navbar.style.boxShadow = '2px 0px 5px rgba(0, 0, 0, 0.1)';
    navbar.style.padding = '20px 0';
    navbar.style.boxSizing = 'border-box';
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column';
    navbar.style.alignItems = 'center';
    navbar.style.zIndex = '1000';

    // Create logo container
    const logoContainer = document.createElement('div');
    logoContainer.style.marginBottom = '30px';
    logoContainer.style.textAlign = 'center';

    // Create logo image 
    const logoImg = document.createElement('img');
    logoImg.src = '/eatzzo/eatzzo/static/images/public/logo.png';
    logoImg.alt = 'Logo';
    logoImg.style.width = '100px';
    logoImg.style.height = '100px';
    logoImg.style.borderRadius = '50%';
    logoImg.style.objectFit = 'cover';

    // Create search container with icon
    const searchContainer = document.createElement('div');
    searchContainer.style.position = 'relative';
    searchContainer.style.width = '80%';
    searchContainer.style.marginBottom = '30px';

    const searchBar = document.createElement('input');
    searchBar.type = 'search';
    searchBar.placeholder = 'Search';
    searchBar.style.width = '100%';
    searchBar.style.padding = '10px 10px 10px 35px';
    searchBar.style.borderRadius = '25px';
    searchBar.style.border = '1px solid #333';
    searchBar.style.outline = 'none';

    const searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search';
    searchIcon.style.position = 'absolute';
    searchIcon.style.left = '10px';
    searchIcon.style.top = '50%';
    searchIcon.style.transform = 'translateY(-50%)';
    searchIcon.style.color = '#333';

    searchContainer.appendChild(searchIcon);
    searchContainer.appendChild(searchBar);

    // Create main navigation options with icons
    const navOptions = [
        { name: 'Home', icon: 'fas fa-home', url: '/eatzzo/eatzzo/templates/blog/home.html' },
        { name: 'Market', icon: 'fas fa-store', link: '/eatzzo/eatzzo/templates/stores/market.html' },
        { name: 'Create', icon: 'fas fa-plus-circle', link: '#' },
        { name: 'Dashboard', icon: 'fas fa-chart-line', link: '/eatzzo/eatzzo/templates/account/dashboard.html' },
        { name: 'Donation', icon: 'fas fa-hand-holding-heart', link: '/eatzzo/eatzzo/templates/donations/donation.html' },
        { name: 'Profile', icon: 'fas fa-user', url: '/eatzzo/eatzzo/templates/account/profile.html' }
    ];

    // Fix url issue
    navOptions.forEach(option => {
        if (option.url) {
            option.link = option.url;
        }
    });

    const navLinksContainer = document.createElement('div');
    navLinksContainer.style.width = '100%';
    navLinksContainer.style.marginBottom = '20px';

    navOptions.forEach(option => {
        const link = document.createElement('a');
        link.href = option.link;

        const icon = document.createElement('i');
        icon.className = option.icon;
        icon.style.marginRight = '10px';

        link.appendChild(icon);
        link.appendChild(document.createTextNode(option.name));

        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.padding = '15px 30px';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.fontSize = '16px';
        link.style.transition = 'all 0.3s';
        link.style.borderLeft = '4px solid transparent';

        // Add hover effect
        link.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#f5f5f5';
            this.style.borderLeft = '4px solid rgb(207, 210, 211)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'transparent';
            this.style.borderLeft = '4px solid transparent';
        });

        navLinksContainer.appendChild(link);
    });

    // Create bottom navigation options (Settings and Help)
    const bottomNavOptions = [
        { name: 'Settings', icon: 'fas fa-cog', link: '/eatzzo/eatzzo/templates/account/settings.html' },
        { name: 'Help', icon: 'fas fa-question-circle', link: '/eatzzo/eatzzo/templates/account/help.html' }
    ];

    const bottomNavContainer = document.createElement('div');
    bottomNavContainer.style.width = '100%';
    bottomNavContainer.style.marginTop = 'auto';
    bottomNavContainer.style.paddingTop = '20px';
    bottomNavContainer.style.borderTop = '1px solid #eee';

    bottomNavOptions.forEach(option => {
        const link = document.createElement('a');
        link.href = option.link;

        const icon = document.createElement('i');
        icon.className = option.icon;
        icon.style.marginRight = '10px';

        link.appendChild(icon);
        link.appendChild(document.createTextNode(option.name));

        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.padding = '15px 30px';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.fontSize = '16px';
        link.style.transition = 'all 0.3s';
        link.style.borderLeft = '4px solid transparent';

        // Add hover effect
        link.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#f5f5f5';
            this.style.borderLeft = '4px solid rgb(207, 210, 211)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'transparent';
            this.style.borderLeft = '4px solid transparent';
        });

        bottomNavContainer.appendChild(link);
    });

    // Assemble the navbar
    logoContainer.appendChild(logoImg);
    navbar.appendChild(logoContainer);
    navbar.appendChild(searchContainer);
    navbar.appendChild(navLinksContainer);
    navbar.appendChild(bottomNavContainer);

    // Add to body
    document.body.insertBefore(navbar, document.body.firstChild);

    // Adjust content margin to account for navbar
    const mainContent = document.createElement('div');
    mainContent.style.marginLeft = '250px';
    mainContent.style.padding = '20px';

    // If there's existing content, wrap it in the mainContent div
    const existingContent = Array.from(document.body.children).filter(child => child.id !== 'navbar');
    existingContent.forEach(element => {
        mainContent.appendChild(element);
    });

    document.body.appendChild(mainContent);

    // Add Font Awesome for icons (if not already loaded)
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }

    // Create the post popup
    const createPopup = document.createElement('div');
    createPopup.className = 'create-popup';
    createPopup.id = 'createPopup';
    createPopup.style.display = 'none';
    createPopup.style.position = 'fixed';
    createPopup.style.top = '0';
    createPopup.style.left = '0';
    createPopup.style.width = '100%';
    createPopup.style.height = '100%';
    createPopup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    createPopup.style.zIndex = '1001';
    createPopup.style.justifyContent = 'center';
    createPopup.style.alignItems = 'center';

    // Close popup when clicking on empty space
    createPopup.addEventListener('click', function(e) {
        if (e.target === createPopup) {
            closeCreatePopup();
        }
    });

    // Popup content container
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.style.backgroundColor = '#fff';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '10px';
    popupContent.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    popupContent.style.width = '500px';
    popupContent.style.maxWidth = '90%';
    popupContent.style.maxHeight = '90vh';
    popupContent.style.overflow = 'auto';

    // Stop propagation when clicking inside popup content
    popupContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Popup header
    const popupHeader = document.createElement('div');
    popupHeader.className = 'popup-header';
    popupHeader.style.display = 'flex';
    popupHeader.style.justifyContent = 'space-between';
    popupHeader.style.alignItems = 'center';
    popupHeader.style.marginBottom = '20px';
    popupHeader.style.paddingBottom = '10px';
    popupHeader.style.borderBottom = '1px solid #eee';

    const headerTitle = document.createElement('h3');
    headerTitle.textContent = 'Create New Post';
    headerTitle.style.margin = '0';
    headerTitle.style.color = '#425010';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.id = 'closePopup';
    closeBtn.innerHTML = '&times;';
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#425010';
    closeBtn.style.padding = '0';
    closeBtn.style.margin = '0';

    popupHeader.appendChild(headerTitle);
    popupHeader.appendChild(closeBtn);

    // Popup body
    const popupBody = document.createElement('div');
    popupBody.className = 'popup-body';

    // Upload area
    const uploadArea = document.createElement('div');
    uploadArea.className = 'upload-area';
    uploadArea.id = 'uploadArea';
    uploadArea.style.border = '2px dashed #ccc';
    uploadArea.style.borderRadius = '8px';
    uploadArea.style.padding = '40px 20px';
    uploadArea.style.textAlign = 'center';
    uploadArea.style.cursor = 'pointer';
    uploadArea.style.transition = 'all 0.3s';

    const uploadIcon = document.createElement('i');
    uploadIcon.className = 'fas fa-cloud-upload-alt';
    uploadIcon.style.fontSize = '48px';
    uploadIcon.style.marginBottom = '15px';
    uploadIcon.style.color = '#425010';

    const uploadText = document.createElement('p');
    uploadText.textContent = 'Drag photos or videos here or click to browse';
    uploadText.style.margin = '0';
    uploadText.style.color = '#666';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'fileInput';
    fileInput.accept = 'image/*, video/*';
    fileInput.multiple = true;
    fileInput.style.display = 'none';

    uploadArea.appendChild(uploadIcon);
    uploadArea.appendChild(uploadText);
    uploadArea.appendChild(fileInput);

    // Preview area
    const previewArea = document.createElement('div');
    previewArea.className = 'preview-area';
    previewArea.id = 'previewArea';
    previewArea.style.display = 'none';

    const mediaPreview = document.createElement('div');
    mediaPreview.className = 'media-preview';
    mediaPreview.id = 'mediaPreview';
    mediaPreview.style.display = 'flex';
    mediaPreview.style.flexDirection = 'column';
    mediaPreview.style.gap = '15px';
    mediaPreview.style.marginBottom = '20px';

    const captionArea = document.createElement('div');
    captionArea.className = 'caption-area';
    captionArea.style.marginBottom = '20px';

    const postCaption = document.createElement('textarea');
    postCaption.placeholder = 'Write a caption...';
    postCaption.id = 'postCaption';
    postCaption.style.width = '100%';
    postCaption.style.padding = '10px';
    postCaption.style.border = '1px solid #ddd';
    postCaption.style.borderRadius = '5px';
    postCaption.style.minHeight = '100px';
    postCaption.style.resize = 'vertical';

    captionArea.appendChild(postCaption);

    const postOptions = document.createElement('div');
    postOptions.className = 'post-options';
    postOptions.style.marginBottom = '20px';

    const sellLabel = document.createElement('label');
    sellLabel.style.display = 'flex';
    sellLabel.style.alignItems = 'center';
    sellLabel.style.gap = '10px';
    sellLabel.style.marginBottom = '15px';
    sellLabel.style.cursor = 'pointer';
    
    const sellCheckbox = document.createElement('input');
    sellCheckbox.type = 'checkbox';
    sellCheckbox.id = 'sellCheckbox';
    sellCheckbox.style.width = '18px';
    sellCheckbox.style.height = '18px';
    sellCheckbox.style.cursor = 'pointer';
    
    const sellText = document.createElement('span');
    sellText.textContent = 'Mark as sellable';
    sellText.style.color = '#425010';
    
    sellLabel.appendChild(sellCheckbox);
    sellLabel.appendChild(sellText);

    const priceInput = document.createElement('div');
    priceInput.className = 'price-input';
    priceInput.id = 'priceInput';
    priceInput.style.display = 'none';
    priceInput.style.marginTop = '10px';

    const postPrice = document.createElement('input');
    postPrice.type = 'number';
    postPrice.placeholder = 'Price in ₹';
    postPrice.id = 'postPrice';
    postPrice.style.width = '100%';
    postPrice.style.padding = '10px';
    postPrice.style.border = '1px solid #ddd';
    postPrice.style.borderRadius = '5px';

    priceInput.appendChild(postPrice);
    postOptions.appendChild(sellLabel);
    postOptions.appendChild(priceInput);

    previewArea.appendChild(mediaPreview);
    previewArea.appendChild(captionArea);
    previewArea.appendChild(postOptions);

    popupBody.appendChild(uploadArea);
    popupBody.appendChild(previewArea);

    // Popup footer
    const popupFooter = document.createElement('div');
    popupFooter.className = 'popup-footer';
    popupFooter.style.display = 'flex';
    popupFooter.style.justifyContent = 'flex-end';
    popupFooter.style.gap = '10px';
    popupFooter.style.paddingTop = '15px';
    popupFooter.style.borderTop = '1px solid #eee';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.id = 'cancelPost';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.padding = '8px 16px';
    cancelBtn.style.border = '1px solid #ddd';
    cancelBtn.style.borderRadius = '4px';
    cancelBtn.style.background = 'none';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.style.transition = 'all 0.3s';

    cancelBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f5f5f5';
    });
    
    cancelBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });

    const submitPost = document.createElement('button');
    submitPost.className = 'post-btn';
    submitPost.id = 'submitPost';
    submitPost.textContent = 'Post';
    submitPost.disabled = true;
    submitPost.style.padding = '8px 16px';
    submitPost.style.border = 'none';
    submitPost.style.borderRadius = '4px';
    submitPost.style.background = '#425010';
    submitPost.style.color = 'white';
    submitPost.style.cursor = 'pointer';
    submitPost.style.transition = 'all 0.3s';

    submitPost.addEventListener('mouseenter', function() {
        this.style.opacity = '0.9';
    });
    
    submitPost.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });

    popupFooter.appendChild(cancelBtn);
    popupFooter.appendChild(submitPost);

    // Assemble the popup
    popupContent.appendChild(popupHeader);
    popupContent.appendChild(popupBody);
    popupContent.appendChild(popupFooter);
    createPopup.appendChild(popupContent);

    // Add the popup to the document body
    document.body.appendChild(createPopup);

    // Add event listeners for the popup
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
                img.style.maxWidth = '100%';
                img.style.borderRadius = '5px';
                mediaPreview.appendChild(img);
            } else if (fileType === 'video') {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(file);
                video.controls = true;
                video.style.maxWidth = '100%';
                video.style.borderRadius = '5px';
                mediaPreview.appendChild(video);
            }
        }

        submitPost.disabled = false;
    }

    // Event listeners
    closeBtn.addEventListener('click', closeCreatePopup);
    cancelBtn.addEventListener('click', closeCreatePopup);

    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);

    sellCheckbox.addEventListener('change', function () {
        priceInput.style.display = this.checked ? 'block' : 'none';
    });

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
        uploadArea.style.borderColor = '#425010';
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

    // Add event listener for the Create button in navbar
    document.addEventListener('click', function(e) {
        // Check if the clicked element is the Create link
        if (e.target.closest('a') && e.target.closest('a').textContent.includes('Create')) {
            e.preventDefault();
            createPopup.style.display = 'flex';
        }
    });
});