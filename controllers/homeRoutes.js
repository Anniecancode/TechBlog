const router = require('express').Router();
const {User, Post, Comment} = require('../model');

// GET all posts from homepage
router.get('/', async (req, res, next) => {
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

// GET user's posts from dashboard page
router.get('/dashboard', async (req, res, next) => {
    try {
        const { user_id } = req.session;

        const data = await Post.findAll({
             where: { user_id },
        });
        const posts = data.map(post => post.get({ plain: true }));
        res.render('dashboard', { ...posts });
    } catch (error) {
        next (error)
    }
});

// GET user's posts from dashboard page
router.get('/post/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { user_id } = req.session;

        const data = await Post.findByPk(id, {
            include: [{
                model: Comment,
                include: [{ model: User }],
                model: User
            }],
        });
        const posts = data.map(post => post.get({ plain: true }));
        res.render('dashboard', { 
            ...posts,
        edit_mode: this.posts.user_id === user_id });
    } catch(error) {
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