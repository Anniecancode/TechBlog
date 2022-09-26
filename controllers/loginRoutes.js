const router = require('express').Router();
const { User, Post } = require('../model');

// GET all user's posts
router.get('/dashboard', async (req, res, next) => {
    try {
        const data = await User.findByPk(req.session.user_id, {
            include: [{ model: Post }],
            attributes: {exclude: 'password'}
        });

        const posts = data.get({ plain: true });
        res.render('dashboard', { ...posts, loggedIn: true })
    }  catch(error) {
        next(error)
    }
});

// CREATE post 
router.get('/post/', async (req, res, next) => {
    try {
        res.render('createPost')
    }  catch(error) {
        next (error)
    }
});

// UPDATE post
router.get('/post/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const posts = await Post.findByPk(id);
        res.render('createPost', { 
            ...posts.get ({ plain: true }), edit_mode: true
        });
    }  catch(error) {
        next (error)
    }
});

module.exports = router;

