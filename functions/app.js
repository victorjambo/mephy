const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
// const expressValidator = require('express-validator');

const routes = require('./src/routes');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// validators
// app.use(expressValidator());

// mount path/routes
routes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // return json response with error message
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;
