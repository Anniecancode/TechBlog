const router = require('express').Router();
const {Post, Comment} = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts from homepage
router.get('/',async (req, res) => {
    try {
        const data = await Post.findAll({
            include: [
                {
                    model: 
                }
            ]
        })
    }
})