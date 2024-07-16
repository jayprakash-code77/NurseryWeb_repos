
document.getElementById("passwordForm").addEventListener("submit", function (event) {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const message = validatePassword(password); // validatePassword(); is a method in "/JSMethods/passwordValidator.js".

    // Check the validity of the password 
    if (message !== "Password is valid.") {
        passwordInput.setCustomValidity(message);
        passwordInput.reportValidity();
        event.preventDefault();
    } else {
        passwordInput.setCustomValidity(""); // Clear any previous custom validity messages
    }
});

document.getElementById("password").addEventListener('input', function () {
    this.setCustomValidity(""); // Clear any previous custom validity messages when the user starts typing
});



