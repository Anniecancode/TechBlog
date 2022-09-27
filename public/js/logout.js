const logout = async () => {
    const response = await fetch('api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert ('Logout failed')
    }
};

document
    .getElementById('logout')
    .addEventListener('click', logout);
