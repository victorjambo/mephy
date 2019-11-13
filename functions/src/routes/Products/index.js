const express = require('express');
const { checkSchema } = require('express-validator');

const ProductController = require('./ProductController');
const { Validator } = require('../../middlewares');

const Router = express.Router();

const attr = [
  'title', 'description', 'thumb', 'state', 'flag', 'image', 'rating', 'prize', 'initial_prize'
];

Router.get(
  '/products',
  ProductController.gets
);

Router.get(
  '/products/:id/',
  Validator.validateId,
  ProductController.get
);

Router.post(
  '/products',
  ProductController.create
);

Router.patch(
  '/products/:id/',
  Validator.validateId,
  ProductController.update
);

Router.delete(
  '/products/:id/',
  Validator.validateId,
  ProductController.delete
);

module.exports = Router;
