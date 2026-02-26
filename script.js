//Get all DOM elements
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    resetform();

    // Send form data to email service 
});