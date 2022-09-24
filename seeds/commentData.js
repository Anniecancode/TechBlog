const { Comment } = require('../model');

const commentdata = [
    {
       comment_title: '',
       comment_content: '',
       date: '24/09/2022',
       user_id:
       post_id
    },
    {
        comment_title: '',
        comment_content: '',
        date: '24/09/2022',
        user_id:
        post_id
     },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;