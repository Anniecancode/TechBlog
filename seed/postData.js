const { Post } = require('../model');

const postdata = [
    {
        title: 'Why MVC is so important',
        content: 'MVC is important to understand because it is the basic structure which most web applications are built on. The same is also true for mobile apps and desktop programs.',
        user_id: 1,
    },
    {
        title: 'Authentication vs. Authorization',
        content: 'Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.',
        user_id: 1,
    },
    {
        title: 'What are the most important qualities that a Full Stack Developer must have',
        content: 'Full Stack Developer skills required are Front-end technology, Development Languages, Database, Basic design ability, Server, Working with API and version control systems.',
        user_id: 1,
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;