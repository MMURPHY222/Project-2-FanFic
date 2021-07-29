const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const storyRoutes = require('./storyRoutes');

router.use('/stories', storyRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;