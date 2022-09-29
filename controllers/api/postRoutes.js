const router = require('express').Router();
const { Post, Comment } = require('../../model');
const withAuth = require('../../utils/auth');

// CREATE new post
// WORKING
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
// WORKING
router.post('/:post_id/comment', withAuth, async (req, res, next) => {
    try {
        const commentData = await Comment.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id,
            post_id: req.params.post_id,
            
        });
        console.log(commentData)
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
    try {
        //const id = req.params.id;
        //const post = await Post.findByPk(id);
        //if (post.user_id !== req.body.user_id) {
            //alart ('You cannot update this post!')
        //}  
        const postData = await Post.update(
            {...req.body, id: req.session.id },
            { where: {id: req.params.id }}
            );
            req.session.save(() => {
                req.session.loggedIn = true;
                res.status(200).json(postData);
            });
    }  catch(error) {
        next(error)
    }
});

// DELETE a post
router.delete('/:id', withAuth, async (req, res) => {
    //const id = req.params.id;
    //const post = await Post.findByPk(id);
    //if (post.user_id !== req.body.user_id) {
        //alart ('You cannot delete this post!')
    //}  
    const postData = await Post.destroy(
        {where: { id: req.params.id }}
    );
       res.status(200).json(postData);
});

module.exports = router;