document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrorMessage();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate the email and password here (e.g., regular expressions)

    // For this example, let's assume a valid email and password
    if (email === 'omaradlymms2002@gmail.com' && password === 'password') {
        // Successful login
        window.location.href = 'home.html';
    } else {
        displayErrorMessage('Invalid email or password. Please try again.');
    }
});

document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
        passwordField.type = 'password';
        this.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
});

function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

function clearErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
}
