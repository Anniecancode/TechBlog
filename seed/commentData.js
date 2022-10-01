const { Comment } = require('../model');

const commentdata = [
   {
      comment_content: 'Agreed!',
      user_id: 1,
      post_id: 1,
   },
   {
      comment_content: 'A Java full stack developer can build whole Java applications including front end, back-end, database, APIs, server and version control.',
      user_id: 1,
      post_id: 3,
   }, 
]; 

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;