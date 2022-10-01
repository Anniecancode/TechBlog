const router = require('express').Router();
const { User, Post, Comment } = require('../model');
const withAuth = require('../utils/auth');

// GET all posts from homepage
router.get('/', async (req, res, next) => {
    try {
        const data = await Post.findAll({
            include: [{ model: User }],
        });
        const posts = data.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts: posts, loggedIn: req.session.loggedIn });
    } catch (error) {
        next(error)
    }
});

// GET single post
router.get('/post/:id', withAuth, async (req, res, next) => {
    try {
        const postData = await Post.findByPk(req.params.id, { 
            include: [{ model: User, 
                attributes: ['username']},
                { model: Comment }],
        });
        const post = postData.get({ plain: true });
        res.render('post', { ...post,
            loggedIn: req.session.loggedIn,    
        });
    } catch (error) {
        next(error)
    }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
});

module.exports = router;