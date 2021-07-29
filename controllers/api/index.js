const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
// router.use('/categories', categoryRoutes);

module.exports = router;