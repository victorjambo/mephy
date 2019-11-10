const express = require('express');
const AnatomyController = require('./AnatomyController');

const Router = express.Router();

Router.get(
  '/anatomies',
  AnatomyController.gets
);

Router.get(
  '/anatomies/:id',
  AnatomyController.get
);

Router.post(
  '/anatomies',
  AnatomyController.create
);

Router.patch(
  '/anatomies/:id',
  AnatomyController.update
);

Router.delete(
  '/anatomies/:id',
  AnatomyController.delete
);

module.exports = Router;
