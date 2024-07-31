document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.hero .email-form input');
    const stepEmailInput = document.querySelector('.step #email');

    // Function to show the step section
    function showStep() {
        document.querySelector('.hero').style.display = 'none';
        document.querySelector('.step').style.display = 'block';
        stepEmailInput.value = emailInput.value; // Pre-fill email
    }

    // Add click event listener to the Get Started button
    document.querySelector('.email-form button').addEventListener('click', function(event) {
        event.preventDefault();
        showStep();
    });

    // Add click event listener to the Sign In button
    document.querySelector('.sign-in').addEventListener('click', function() {
        showStep();
    });

    // FAQ toggle functionality
    document.querySelectorAll('.faq-section .question').forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    });
});
