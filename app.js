function validateForm(event) {
    event.preventDefault();  // Prevent form from submitting to the server

    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Message").value;
    var messageDiv = document.getElementById("form-message");

    // Reset previous error message
    messageDiv.innerHTML = '';

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        messageDiv.innerHTML = "Please fill in all fields.";
        messageDiv.style.color = "red";
        return false;
    }

    // Check if the email format is correct
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageDiv.innerHTML = "Please enter a valid email address.";
        messageDiv.style.color = "red";
        return false;
    }

    // Success message after successful submission
    messageDiv.innerHTML = "Thank you for your message!";
    messageDiv.style.color = "green";

    // Clear the form
    document.getElementById("contact-form").reset();
    return false; // Prevent form submission for this demonstration
}
