const express = require('express');
const ProductController = require('./ProductController');

const Router = express.Router();

Router.get(
  '/products',
  ProductController.gets
);

Router.get(
  '/products/:id',
  ProductController.get
);

Router.post(
  '/products',
  ProductController.create
);

Router.patch(
  '/products/:id',
  ProductController.update
);

Router.delete(
  '/products/:id',
  ProductController.delete
);

module.exports = Router;
