const router = require('express').Router();

// Import the custom middleware
const withAuth = require('../utils/auth');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', withAuth, loginRoutes)

module.exports = router;