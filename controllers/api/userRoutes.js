const router = require('express').Router();
const { User } = require('../../model');

// CREATE new user
router.post('/', async (req, res, next) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        })
    } catch (error) {
        next(error)
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!userData) {
            res
              .status(400)
              .json({ })
            return;
        }

        const userPassword = await userData.checkPassword(req.body.password);

        if (!userPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect username or password. Please try again!' })
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res
              .status(200)
              .json({ user: userData, message: 'You are now loggeed in!' });
        });
    }  catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }  else {
        res.status(404).end()
    }
});

module.exports = router;