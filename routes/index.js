// import router
const router = require('express').Router();

// import route files
const apiRoutes = require('./api');
const htmlRoutes = require('./html');

// create modular routers
router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

// export router to be used in server.js
module.exports = router;