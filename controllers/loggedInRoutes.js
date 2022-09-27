const router = require('express').Router();
const { User, Post } = require('../model');
const withAuth = require('../utils/auth');

// GET all user's posts
router.get('/dashboard', withAuth, async (req, res, next) => {
    try {
        const user_id = req.session.user_id;
        console.log(`this is ${user_id}`)
       
        const data = await Post.findAll({
            include: [{ model: User}],
        });

        const posts = data.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts })
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
        const  id  = req.params;
        const posts = await Post.findByPk(id);
        res.render('createPost', { 
            ...posts.get ({ plain: true }), edit_mode: true
        });
    }  catch(error) {
        next (error)
    }
});

module.exports = router;
