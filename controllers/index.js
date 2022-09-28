const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loggedInRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', loginRoutes)

module.exports = router;