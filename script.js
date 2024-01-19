
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation (for demonstration)
    if(name && email && message) {
        alert('Thank you for your message!');
        // Here you can add code to handle the form data,
        // like sending it to a server or displaying it somewhere.
    } else {
        alert('Please fill out all fields.');
    }
});
