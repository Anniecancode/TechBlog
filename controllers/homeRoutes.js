const router = require('express').Router();
const { User, Post, Comment } = require('../model');
const withAuth = require('../utils/auth');

// GET all posts from homepage
// WORKING
router.get('/', async (req, res, next) => {
    try {
        const data = await Post.findAll({
            include: [{ model: User }],
        });
        const posts = data.map((post) => post.get({ plain: true }));
        res.render("homepage", { posts: posts, loggedIn: req.session.loggedIn });
    } catch (error) {
        next(error)
    }
});

// GET single post
// CHANGED - NOT GETTING POSTS
router.get('/post/:id', withAuth, async (req, res, next) => {
    try {
        const postData = await Post.findByPk(req.params.id, { 
            include: [{ model: User, 
                attributes: ['username'] }],
        });
        const posts = postData.get({ plain: true });
    
        const commentData = await Comment.findAll({ 
            where: { post_id: req.params.id }, 
            include: [{ model: User, 
                attributes: ["username"] }]
        });
        const comments = commentData.map((data) => data.get({ plain: true }));
    
        res.render('dashboard', { ...posts, comments,
            loggedIn: req.session.loggedIn,
            
        });
    } catch (error) {
        next(error)
    }
});
    
// WORKING
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
});

module.exports = router;