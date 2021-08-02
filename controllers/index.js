const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
// reference associated routes and api
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// export for server
module.exports = router;