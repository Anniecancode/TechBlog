const logout = async () => {
    const response = await fetch('api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alart ('Logout failed')
    }
};

document
    .getElementById('logout')
    .addEventListener('click', logout);
