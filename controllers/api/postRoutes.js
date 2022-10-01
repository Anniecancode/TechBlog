const router = require('express').Router();
const { Post, Comment } = require('../../model');
const withAuth = require('../../utils/auth');

// CREATE new post
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
router.post('/:post_id/comment', withAuth, async (req, res, next) => {
    try {
        const commentData = await Comment.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id,
            post_id: req.params.post_id,   
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
router.put('/:id', withAuth, async (req, res, next) => {
    await Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// DELETE a post
router.delete('/:id', withAuth, async (req, res) => {
    const postData = await Post.destroy(
        {where: { id: req.params.id }}
    );
       res.status(200).json(postData);
});

module.exports = router;