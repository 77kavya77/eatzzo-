function showFoodForm() {
    document.getElementById('foodDonationForm').style.display = 'block';
    document.getElementById('moneyDonationForm').style.display = 'none';
}

function showMoneyForm() {
    document.getElementById('moneyDonationForm').style.display = 'block';
    document.getElementById('foodDonationForm').style.display = 'none';
}

// Toggle anonymous donation for FOOD form
function toggleFoodAnonymous() {
    const isAnonymous = document.getElementById('anonymous-food').checked;
    const nameGroup = document.getElementById('food-donor-name-group');
    const phoneGroup = document.getElementById('food-donor-phone-group');
    const addressGroup = document.getElementById('food-donor-address-group');
    const deliveryOptionGroup = document.getElementById('food-delivery-option-group');

    if (isAnonymous) {
        nameGroup.style.display = 'none';
        phoneGroup.style.display = 'none';
        addressGroup.style.display = 'none';
        deliveryOptionGroup.style.display = 'none';
    } else {
        nameGroup.style.display = 'block';
        phoneGroup.style.display = 'block';
        addressGroup.style.display = 'block';
        deliveryOptionGroup.style.display = 'block';
    }
}

// Toggle anonymous donation for MONEY form
function toggleMoneyAnonymous() {
    const isAnonymous = document.getElementById('anonymous-money').checked;
    const nameGroup = document.getElementById('money-donor-name-group');
    const emailGroup = document.getElementById('money-donor-email-group');
    const phoneGroup = document.getElementById('money-donor-phone-group');

    if (isAnonymous) {
        nameGroup.style.display = 'none';
        emailGroup.style.display = 'none';
        phoneGroup.style.display = 'none';
    } else {
        nameGroup.style.display = 'block';
        emailGroup.style.display = 'block';
        phoneGroup.style.display = 'block';
    }
}

// Reset forms when switching between donation types
document.getElementById('foodForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Food donation submitted! Thank you for your generosity.');
    this.reset();
});

document.getElementById('moneyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Redirecting to payment gateway... (Demo)');
    this.reset();
});
