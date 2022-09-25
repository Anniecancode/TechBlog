const { User } = require('../model');

const userdata = {
    username: 'Ammmmmy',
    password: 'pass1234'
};

const seedUser = () => User.create(userdata);

module.exports = seedUser;
