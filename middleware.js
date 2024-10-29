function logger(req, res, next) {
    console.log(`Sending ${req.method} request to ${req.path}.`);
    return next();
  }
  
  const ExpressError = require("./expressError");

  module.exports = { logger };