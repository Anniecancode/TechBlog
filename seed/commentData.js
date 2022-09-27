const { Comment } = require('../model');

const commentdata = [
   {
      comment_content: 'drhnrf',
      user_id: 1,
      post_id: 1,
   },
   {
      comment_content: 'rhyrhy',
      user_id: 1,
      post_id: 3,
   }, 
]; 

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;