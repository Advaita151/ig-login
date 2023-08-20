document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your authentication logic.
    // For this example, let's just display an alert.
    alert(`Username: ${username}\nPassword: ${password}`);
});
