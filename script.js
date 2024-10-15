// Array of user objects containing usernames/emails and passwords
const users = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2", password: "abc12345" },
    { email: "user3@example.com", password: "password456" },
    { email: "user4", password: "mypassword" },
    { email: "user5@example.com", password: "secure123" }
    // Add as many users as needed
];

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');
    
    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
    } else {
        passwordField.setAttribute('type', 'password');
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageBox = document.createElement('p');
    const form = document.querySelector('form');
    let userFound = false;
    
    // Remove any previous messages
    const oldMessage = document.querySelector('.message');
    if (oldMessage) {
        oldMessage.remove();
    }

    // Check if the username/email and password match any user in the array
    for (let i = 0; i < users.length; i++) {
        if (usernameInput === users[i].email) {
            if (passwordInput === users[i].password) {
                messageBox.textContent = "Login successful!";
                messageBox.style.color = 'green';
                userFound = true;
            } else {
                messageBox.textContent = "Password didn't match!";
                messageBox.style.color = 'red';
                userFound = true;
            }
            break;
        }
    }

    // If no matching user is found
    if (!userFound) {
        messageBox.textContent = "Username didn't match!";
        messageBox.style.color = 'red';
    }

    // Add message box to form
    messageBox.classList.add('message');
    form.appendChild(messageBox);
});
