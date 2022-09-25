const router = require('express').Router();
const { Post, Comment } = require('../../model');

// CREATE new post
router.post('./', async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const { user_id } = req.session;

        const postData = await Post.create({
            title, content, user_id
        });
            res.status(200).json(postData);
    } catch (error) {
        next (error)
    }
});

// CREATE new comment
router.post('./:post_id/comment', async (req, res, next) => {
    try {
        const { content } = req.body;
        const { user_id } = req.session;
        const { post_id } = req.params;

        const commentData = await Comment.create({
            content, user_id, post_id
        });
        res.status(200).json(commentData);
    } catch (error) {
        next (error)
    }
});

// UPDATE a post
router.put('./:post_id', async (req, res, next) => {
    try {
        const { post_id } = req.params;
        const post = await Post.findByPk(post_id);
        if (post.user_id !== req.body.user_id) {
            alart ('You cannot update this post!')
        }  await post.update(req.body);
           res.status(200);
    }  catch(error) {
        next(error)
    }
});

// DELETE a post
router.delete('./:post_id', async (req, res) => {
    const { post_id } = req.params;
    const post = await Post.findByPk(post_id);
    if (post.user_id !== req.body.user_id) {
        alart ('You cannot delete this post!')
    }  await post.destroy();
       res.status(200);
});