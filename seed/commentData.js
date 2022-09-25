const { Comment } = require('../model');

const commentdata = [
    {
       comment_title: '',
       comment_content: '',
       date: '24/09/2022',
       user_id: '1',
       post_id: '1'
    },
    {
        comment_title: '',
        comment_content: '',
        date: '24/09/2022',
        user_id: '1',
        post_id: '2'
     },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;