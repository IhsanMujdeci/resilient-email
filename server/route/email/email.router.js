const emailRouter = require('express').Router();
const handlers = require('./email.handler');

emailRouter.post('/send', handlers.send);

module.exports = emailRouter;
