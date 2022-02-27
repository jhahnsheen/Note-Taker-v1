// import router
const router = require('express').Router();

// import route files
const apiRoutes = require('./api');
const htmlRoutes = require('./html');

// create routes to logic
router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;