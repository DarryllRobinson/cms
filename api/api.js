const express = require('express');
const apiRouter = express.Router();
const usersRouter = require('./users.js');
const contentsRouter = require('./contents.js');

apiRouter.use('/users', usersRouter);
apiRouter.use('/contents', contentsRouter);

module.exports = apiRouter;
