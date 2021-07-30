const router = require('express').Router();
const storyRoutes = require('./storyRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/newstory', storyRoutes);
router.use('/newcomment', commentRoutes);
// router.use('/categories', categoryRoutes);

module.exports = router;