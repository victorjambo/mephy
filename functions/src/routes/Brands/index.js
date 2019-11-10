const express = require('express');
const BrandController = require('./BrandController');

const Router = express.Router();

Router.get(
  '/brands',
  BrandController.gets
);

Router.get(
  '/brands/:id',
  BrandController.get
);

Router.post(
  '/brands',
  BrandController.create
);

Router.patch(
  '/brands/:id',
  BrandController.update
);

Router.delete(
  '/brands/:id',
  BrandController.delete
);

module.exports = Router;
