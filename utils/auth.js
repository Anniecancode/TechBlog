const withAuth = async (req, res) => {
     // If the user isn't logged in, redirect them to the login route
    if (!req.session.loggedIn) {
        res.redirect('/login');
    }
};

module.exports = withAuth;