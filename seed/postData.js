const { Post } = require('../model');

const postdata = [
    {
       title: 'Why MVC is so important',
       content: 'MVC is important to understand because it is the basic structure which most web applications are built on. The same is also true for mobile apps and desktop programs.',
       date: '24/09/2022',
    },
    {
        title: 'Authentication vs. Authorization',
        content: 'Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.',
        date: '24/09/2022',
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;