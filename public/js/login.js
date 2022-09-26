// Login 
login = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (username && password) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('Login failed')
        }
    }
};


// Signup
signup = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (username && password) {
        const response = await fetch('api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('Signup failed')
        }
    }
};


document
    .getElementById('login-card')
    .addEventListener('submit', login);

document
    .getElementById('signup-card')
    .addEventListener('submit', signup);

