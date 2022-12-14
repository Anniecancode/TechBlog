const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./otherRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', loginRoutes)

module.exports = router;