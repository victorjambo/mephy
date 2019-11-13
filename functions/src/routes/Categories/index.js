const express = require('express');
const CategoryController = require('./CategoryController');

const Router = express.Router();

Router.get(
  '/categories',
  CategoryController.gets
);

Router.get(
  '/categories/:id',
  CategoryController.get
);

Router.post(
  '/categories',
  CategoryController.create
);

Router.patch(
  '/categories/:id',
  CategoryController.update
);

Router.delete(
  '/categories/:id',
  CategoryController.delete
);

module.exports = Router;
