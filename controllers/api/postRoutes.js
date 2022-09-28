const router = require('express').Router();
const { Post, Comment } = require('../../model');
const withAuth = require('../../utils/auth');

// CREATE new post
// CHANGED - WORKING
router.post('/', withAuth, async (req, res, next) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(postData);
        });
    } catch (error) {
        next (error)
    }
});

// CREATE new comment
// CHANGED - HAVENT TESTED
router.post('/:post_id/comment', withAuth, async (req, res, next) => {
    try {
        const commentData = await Comment.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id,
            post_id: req.params.post_id
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(commentData);
        });
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

module.exports = router;