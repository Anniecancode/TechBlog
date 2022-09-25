const { Comment } = require('../model');

const commentdata = [
    {
       comment_title: 'dhf',
       comment_content: 'drhnrf',
       user_id: 1,
       post_id: 1,
    },
    {
        comment_title: 'hrf',
        comment_content: 'rhyrhy',
        user_id: 1,
        post_id: 2,
     },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;