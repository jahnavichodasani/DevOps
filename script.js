document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

  
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!fullName || !namePattern.test(fullName) || fullName.split(" ").length < 2) {
        alert("Full Name must contain at least two words.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

   
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    
    const phonePattern = /^[0-9]{10}$/;
    if (!phoneNumber || !phonePattern.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    
    if (!gender) {
        alert("Please select your gender.");
        return;
    }
 
    
    alert("Registration successful!");
});
