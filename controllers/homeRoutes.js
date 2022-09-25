const router = require('express').Router();
const {User, Post, Comment} = require('../model');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts from homepage
router.get('/',async (req, res, next) => {
    try {
        const data = await Post.findAll({
            include: [{ model: User }],
        });
        const posts = data.map((post) => post.get({ plain: true }));
        res.render("homepage", { posts });
    } catch (error) {
        next(error)
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login')
});

module.exports = router;