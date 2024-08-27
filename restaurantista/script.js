document.addEventListener('DOMContentLoaded', function load() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const checkboxInput = document.getElementById('checkbox');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const checkboxValue = checkboxInput.checked; // Use lowercase 'checked'

        if (!isEmailValid(emailValue)) {
            alert('Please enter a valid email');
        } else if (!checkboxValue) { // Corrected condition
            alert('Please select the checkbox to subscribe to our newsletter');
        } else {
            alert('Thank you for subscribing to our newsletter');
        }
    });

    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Corrected regex
        return emailRegex.test(email);
    }
});

