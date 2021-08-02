const router = require('express').Router();
const storyRoutes = require('./storyRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes')
// reference api routes for comment, user, and story
router.use('/users', userRoutes);
router.use('/newstory', storyRoutes);
router.use('/newcomment', commentRoutes);
// export for index
module.exports = router;