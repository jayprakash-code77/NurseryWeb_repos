function validatePassword(password) {
    // Check length
    if (password.length <= 8 || password.length >= 12) {
        return "Password must be greater than 8 and less than 12 characters long.";
    }

    // Regular expressions to check each criterion
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);// match the digits between 0-9
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);//

    // Check if all criteria are met
    if (!hasUppercase) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
        return "Password must contain numbers.";
    }
    if (!hasSpecialChar) {
        return "Password must contain special character.";
    }
    return "Password is valid.";
};

