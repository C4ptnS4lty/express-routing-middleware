const express = require("express")
const app = express();
const itemsRoutes = require("./routes/items")
const ExpressError = require("./expressError")
const middleware = require("./middleware");

app.use(express.json());

// this applies to all requests at all paths
app.use(middleware.logger);
// end middleware.logger

app.use("/items", itemsRoutes);

/** 404 handler */

app.use(function(req, res, next) {
  return new ExpressError("Not Found", 404);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;