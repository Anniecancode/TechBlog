const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedComment = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedPost();
    console.log("\n----- POST SYNCED -----\n");

    await seedComment();
    console.log("\n----- COMMENT SYNCED -----\n");
};

seedAll();