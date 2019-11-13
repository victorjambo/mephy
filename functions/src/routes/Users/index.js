const express = require('express');
const UserController = require('./UserController');

const Router = express.Router();

Router.get(
  '/users',
  UserController.gets
);

Router.get(
  '/users/:id',
  UserController.get
);

Router.post(
  '/users',
  UserController.create
);

Router.patch(
  '/users/:id',
  UserController.update
);

Router.delete(
  '/users/:id',
  UserController.delete
);

module.exports = Router;
