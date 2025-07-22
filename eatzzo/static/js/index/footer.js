// Create and append the login/signup forms first
const createAuthForms = () => {
    // Create the home section with login and signup forms
    const homeSection = document.createElement('section');
    homeSection.className = 'home';
    homeSection.id = 'home';

    // Create login popup
    const loginPopup = document.createElement('div');
    loginPopup.className = 'popup';

    const loginCloseBtn = document.createElement('div');
    loginCloseBtn.className = 'close-btn';
    loginCloseBtn.innerHTML = '&times;';

    const loginForm = document.createElement('div');
    loginForm.className = 'form';

    const loginTitle = document.createElement('h2');
    loginTitle.textContent = 'Log In';

    const phoneLabel = document.createElement('div');
    phoneLabel.className = 'form-element';
    const label = document.createElement('label');
    label.textContent = 'Please enter your phone number to log in';
    phoneLabel.appendChild(label);

    const phoneInput = document.createElement('div');
    phoneInput.className = 'form-element';
    phoneInput.setAttribute('action', '');
    const inputPhone = document.createElement('input');
    inputPhone.type = 'tel';
    inputPhone.id = 'phonenumber';
    inputPhone.placeholder = 'Phone Number';
    inputPhone.required = true;
    const phoneIcon = document.createElement('i');
    phoneIcon.className = 'fa fa-phone';
    phoneIcon.setAttribute('aria-hidden', 'true');
    phoneInput.appendChild(inputPhone);
    phoneInput.appendChild(phoneIcon);

    const loginButton = document.createElement('div');
    loginButton.className = 'form-element';
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Log In';
    loginButton.appendChild(button);

    const signupLink = document.createElement('div');
    signupLink.className = 'form-element';
    const signupLabel = document.createElement('label');
    const signupAnchor = document.createElement('a');
    signupAnchor.href = '#';
    signupAnchor.id = 'show-signupform';
    signupAnchor.textContent = 'Sign Up';
    signupLabel.innerHTML = 'Need to create an account? ';
    signupLabel.appendChild(signupAnchor);
    signupLink.appendChild(signupLabel);

    // Assemble login form
    loginForm.appendChild(loginTitle);
    loginForm.appendChild(phoneLabel);
    loginForm.appendChild(phoneInput);
    loginForm.appendChild(loginButton);
    loginForm.appendChild(signupLink);

    loginPopup.appendChild(loginCloseBtn);
    loginPopup.appendChild(loginForm);

    // Create signup popup
    const signupPopup = document.createElement('div');
    signupPopup.className = 'popup-signup';

    const signupCloseBtn = document.createElement('div');
    signupCloseBtn.className = 'close-btn';
    signupCloseBtn.innerHTML = '&times;';

    const signupForm = document.createElement('div');
    signupForm.className = 'form';

    const signupTitle = document.createElement('h2');
    signupTitle.textContent = 'Sign Up';

    // Phone input for signup
    const signupPhoneInput = document.createElement('div');
    signupPhoneInput.className = 'form-element';
    const signupInputPhone = document.createElement('input');
    signupInputPhone.type = 'tel';
    signupInputPhone.id = 'phonenumber';
    signupInputPhone.placeholder = 'Phone Number';
    signupInputPhone.required = true;
    const signupPhoneIcon = document.createElement('i');
    signupPhoneIcon.className = 'fa fa-phone';
    signupPhoneIcon.setAttribute('aria-hidden', 'true');
    signupPhoneInput.appendChild(signupInputPhone);
    signupPhoneInput.appendChild(signupPhoneIcon);

    // Username input
    const usernameInput = document.createElement('div');
    usernameInput.className = 'form-element';
    usernameInput.setAttribute('action', '');
    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.id = 'uname';
    inputUsername.placeholder = 'Username';
    inputUsername.required = true;
    const userIcon = document.createElement('i');
    userIcon.className = 'fa fa-user';
    userIcon.setAttribute('aria-hidden', 'true');
    usernameInput.appendChild(inputUsername);
    usernameInput.appendChild(userIcon);

    // Email input
    const emailInput = document.createElement('div');
    emailInput.className = 'form-element';
    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.className = 'signup-email';
    inputEmail.placeholder = 'Email';
    inputEmail.required = true;
    const emailIcon = document.createElement('i');
    emailIcon.className = 'fa fa-envelope';
    emailIcon.setAttribute('aria-hidden', 'true');
    emailInput.appendChild(inputEmail);
    emailInput.appendChild(emailIcon);

    // Terms checkbox
    const termsCheckbox = document.createElement('div');
    termsCheckbox.className = 'form-element';
    const termsLabel = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const termsText = document.createElement('label');
    termsText.innerHTML = `I agree to Eatzzo's <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and <a href="#">Content Policies</a>`;
    termsLabel.appendChild(checkbox);
    termsLabel.appendChild(termsText);
    termsCheckbox.appendChild(termsLabel);

    // Login link
    const loginLink = document.createElement('div');
    loginLink.className = 'form-element';
    const loginLabel = document.createElement('label');
    const loginAnchor = document.createElement('a');
    loginAnchor.href = '#';
    loginAnchor.id = 'show-loginform';
    loginAnchor.textContent = 'Login';
    loginLabel.innerHTML = 'Already have an account? ';
    loginLabel.appendChild(loginAnchor);
    loginLink.appendChild(loginLabel);

    // Continue button
    const continueButton = document.createElement('div');
    continueButton.className = 'form-element';
    const continueBtn = document.createElement('button');
    continueBtn.type = 'submit';
    continueBtn.textContent = 'Continue';
    continueButton.appendChild(continueBtn);

    // Assemble signup form
    signupForm.appendChild(signupTitle);
    signupForm.appendChild(signupPhoneInput);
    signupForm.appendChild(usernameInput);
    signupForm.appendChild(emailInput);
    signupForm.appendChild(termsCheckbox);
    signupForm.appendChild(loginLink);
    signupForm.appendChild(continueButton);

    signupPopup.appendChild(signupCloseBtn);
    signupPopup.appendChild(signupForm);

    // Add both popups to home section
    homeSection.appendChild(loginPopup);
    homeSection.appendChild(signupPopup);

    // Add to document body
    document.body.appendChild(homeSection);
};

// Create and append the footer
const createFooter = () => {
    // Create footer element
    const footer = document.createElement('footer');

    // Create footer content div
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';

    // Create logo
    const logo = document.createElement('img');
    logo.src = '/eatzzo/eatzzo/static/images/public/logo.png';
    logo.alt = '';
    logo.className = 'footer-logo';

    // Create links list
    const linksList = document.createElement('ul');
    linksList.className = 'footer-links';

    const links = [
        { text: 'Home', href: 'index.html' },
        { text: 'Contact Us', href: 'contact.html' },
        { text: 'Our Story', href: 'ourstory.html' },
        { text: 'Submit Feedback', href: 'feedback.html' },

    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        linksList.appendChild(li);
    });

    // Create social icons
    const socialIcons = document.createElement('ul');
    socialIcons.className = 'social-icons';

    const icons = [
        { class: 'fab fa-instagram' },
        { class: 'fab fa-facebook' },
        { class: 'fab fa-linkedin' },
        { class: 'fas fa-envelope' }
    ];

    icons.forEach(icon => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        const i = document.createElement('i');
        i.className = icon.class;
        a.appendChild(i);
        li.appendChild(a);
        socialIcons.appendChild(li);
    });

    // Create login button
    const loginButton = document.createElement('button');
    loginButton.id = 'show-login1';
    loginButton.className = 'ctn-secondary';
    loginButton.textContent = 'Log In';

    // Append all elements to footer content
    footerContent.appendChild(logo);
    footerContent.appendChild(linksList);
    footerContent.appendChild(socialIcons);
    footerContent.appendChild(loginButton);

    // Append footer content to footer
    footer.appendChild(footerContent);

    // Add to document body
    document.body.appendChild(footer);
};

// Add all the CSS styles
const addStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
    /* ---------------------------LogIn & SignUp Forms-------------------------------------- */
    @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');

    .popup {
        position: fixed;
        overflow: hidden;
        z-index: 1000;
        top: -50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
        width: 550px;
        height: 600px;
        padding: 50px 30px;
        font-family: 'Irish Grover', cursive;
        background: transparent;
        backdrop-filter: blur(40px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(245, 236, 236, 0.2);
        border-radius: 30px;
        transition: top 0ms ease-in-out 200ms,
            opacity 200ms ease-in-out 0ms,
            trasform 600ms ease-in-out 0ms;
    }

    .popup-signup {
        position: fixed;
        overflow: hidden;
        z-index: 1000;
        top: -50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
        width: 550px;
        height: 600px;
        padding: 40px 30px;
        font-family:  'Irish Grover', cursive;
        background: transparent;
        backdrop-filter: blur(40px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(245, 236, 236, 0.2);
        border-radius: 30px;
        transition: top 0ms ease-in-out 200ms,
            opacity 200ms ease-in-out 0ms,
            trasform 600ms ease-in-out 0ms;
    }

    .popup.active,
    .popup-signup.active {
        top: 50%;
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        transition: top 0ms ease-in-out 200ms,
            opacity 200ms ease-in-out 0ms,
            trasform 600ms ease-in-out 0ms;
    }

    .popup-signup {
        display: none;
    }

    .home.active .popup-signup {
        display: block;
    }

    .home.active .popup {
        display: none;
    }

    .popup .close-btn,
    .popup-signup .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        background: #425010;
        color: #eee;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
        cursor: pointer;
    }

    .popup .form h2,
    .popup-signup .form h2 {
        text-align: center;
        color: #425010;
        margin: 10px 0px 20px;
        font-size: 36px;
    }

    .popup .form .form-element {
        margin: 55px 30px;
    }

    .popup-signup .form .form-element {
        margin: 27px 10px;
    }

    .popup .form .form-element .fa {
        font-size: 40px;
        color: #425010;
        position: absolute;
        left: 42px;
        transform: translateY(-110%);
    }

    .popup-signup .form .form-element .fa {
        font-size: 40px;
        color: #425010;
        position: absolute;
        left: 42px;
        transform: translateY(-110%);
    }

    .popup .form .form-element #phonenumber {
        margin-top: 5px;
        margin-left: 40px;
        display: block;
        width: 90%;
        height: 100%;
        padding: 15px 10px;
        outline: none;
        border: 2px solid #425010;
        border-radius: 40px;
        font-size: 16px;
        color: #425010;
    }

    .popup-signup .form .form-element #phonenumber,
    #uname,
    .signup-email {
        margin-left: 60px;
        display: block;
        width: 85%;
        height: 100%;
        padding: 15px 10px;
        outline: none;
        border: 2px solid #425010;
        border-radius: 40px;
        font-size: 16px;
        color: #425010;
    }

    .popup .form .form-element input::placeholder,
    .popup-signup .form .form-element input::placeholder {
        color: rgba(16, 16, 16, 0.2);
        padding: 0 10px;
    }

    .popup .form .form-element button,
    .popup-signup .form .form-element button {
        border: none;
        padding: 12px 30px;
        background: #425010;
        color: #fff;
        border-radius: 30px;
        font-size: 20px;
        transition: .4s;
        text-decoration: none;
        margin: 5px 35%;
        font-family: irish grover;
        cursor: pointer;
    }

    .popup .form .form-element label {
        margin: 0px 30px;
        font-size: large;
    }

    .popup-signup .form .form-element label {
        margin: 0px 20px;
        font-size: medium;
    }

    .popup .form .form-element a,
    .popup-signup .form .form-element a {
        color: #730404;
        text-decoration: none;
    }

    .popup .form .form-element a:hover,
    .popup-signup .form .form-element a:hover {
        text-decoration: underline;
    }

    .popup-signup input[type="checkbox"] {
    accent-color: #425010;
    }


    /* --------------------------- Footer Styles -------------------------------------- */
    footer {
        width: 100%;
        display: flex;
        background: #425010;
        color: #fff;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        border-radius: 60px 60px 0 0;
    }

    .footer-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding-right: 90px;
        width: 100%;
    }

    /* Footer Logo */
    .footer-logo {
        padding-top: 2.5%;
        padding-left: 2.5%;
        padding-down: 0.5%;
        width: 180px;
        height: 159px;
    }

    /* Footer-Links */
    .footer-links {
        display: flex;
    }

    .footer-links li {
        margin: 0 20px;
        list-style: none;
        display: inline-block;
    }

    .footer-links a {
        text-decoration: none;
        color: #fff;
        font-weight: bolder;
        font-style: poppins;
    }

    .footer-links a:hover {
        text-decoration: solid;
        color: #a0a58e;
        transition: all 0.3s ease os;
    }

    /*social-icons*/
    .social-container {
        width: 400px;
        margin: 40vh auto;
        text-align: center;
    }

    .social-icons {
        padding: 0;
        list-style: none;
        margin: 1em;
    }

    .social-icons li {
        display: inline-block;
        margin: 0.15em;
        position: relative;
        font-size: 1.2em;
    }

    .social-icons i {
        color: #fff;
        position: absolute;
        top: 21px;
        left: 21px;
        transition: all 265ms ease-out;
    }
    .social-icons a {
        display: inline-block;
    }
    .social-icons a:before {
        transform: scale(1);
        -ms-transform: scale(1);
        -webkit-transform: scale(1);
        content: " ";
        width: 60px;
        height: 60px;
        border-radius: 100%;
        display: block;
        background: linear-gradient(45deg, #bf9026, #dfb861);
        transition: all 265ms ease-out;
    }
    .social-icons a:hover:before {
        transform: scale(0);
        transition: all 265ms ease-in;
    }
    .social-icons a:hover i {
        transform: scale(2.2);
        -ms-transform: scale(2.2);
        -webkit-transform: scale(2.2);
        color: #dfb861;
        background: -webkit-linear-gradient(45deg, #f9fbfc, #fcfcfd);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 265ms ease-in;
    }

    /*---------- Footer Login Button ---------------*/

    .ctn-secondary {
        border: none;
        padding: 12px 30px;
        color: #fcfbfb;
        border-radius: 30px;
        font-weight: bold;
        font-size: 16px;
        transition: .4s;
        text-decoration: none;
        background: transparent;
        outline: auto;
    }
    .ctn-secondary:hover {
        transform: scale(1.3);
        box-shadow: 0 0 4px #fff;
        padding: 12px 30px;
        cursor: pointer;
        background-color: #fff;
        color: #425010;
        font-weight: bold;
    }
    `;
    document.head.appendChild(style);
};

// Setup event listeners
const setupEventListeners = () => {
    // Login button in footer
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'show-login1') {
            document.querySelector(".popup").classList.add("active");
            document.querySelector(".popup-signup").classList.add("active");
        }
    });

    // Login & signup close buttons
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('close-btn')) {
            if (e.target.closest('.popup')) {
                document.querySelector(".popup").classList.remove("active");
            }
            if (e.target.closest('.popup-signup')) {
                document.querySelector(".popup-signup").classList.remove("active");
            }
        }
    });

    // Switching between login & signup
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'show-signupform') {
            e.preventDefault();
            document.querySelector(".home").classList.add("active");
        }

        if (e.target && e.target.id === 'show-loginform') {
            e.preventDefault();
            document.querySelector(".home").classList.remove("active");
        }
    });

    // Footer link hover effects
    document.addEventListener('DOMContentLoaded', function () {
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', function () {
                this.style.color = '#a0a58e';
                this.style.textDecoration = 'solid';
            });
            link.addEventListener('mouseleave', function () {
                this.style.color = '#fff';
                this.style.textDecoration = 'none';
            });
        });

        const loginBtn = document.querySelector('.ctn-secondary');
        if (loginBtn) {
            loginBtn.addEventListener('mouseenter', function () {
                this.style.transform = 'scale(1.3)';
                this.style.boxShadow = '0 0 4px #fff';
                this.style.backgroundColor = '#fff';
                this.style.color = '#425010';
            });

            loginBtn.addEventListener('mouseleave', function () {
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.backgroundColor = 'transparent';
                this.style.color = '#fcfbfb';
            });
        }
    });
};

// Functions for showing forms
function showSignup() {
    document.querySelector(".home").classList.add("active");
}

function showLogin() {
    document.querySelector(".home").classList.remove("active");
}

// Initialize everything
const init = () => {
    createAuthForms();
    createFooter();
    addStyles();
    setupEventListeners();

    // Make functions available globally
    window.showSignup = showSignup;
    window.showLogin = showLogin;
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);