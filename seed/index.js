const sequelize = require('../config/connection');
const seedUser = require('./userData')
const seedPost = require('./postData');
const seedComment = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUser();
    console.log("\n----- USER SYNCED -----\n");

    await seedPost();
    console.log("\n----- POSTS SYNCED -----\n");

    await seedComment();
    console.log("\n----- COMMENTS SYNCED -----\n");

    process.exit(0);
};

seedAll();