const express = require('express');
const AnatomyTypeController = require('./AnatomyTypeController');

const Router = express.Router();

Router.get(
  '/anatomy-types',
  AnatomyTypeController.gets
);

Router.get(
  '/anatomy-types/:id',
  AnatomyTypeController.get
);

Router.post(
  '/anatomy-types',
  AnatomyTypeController.create
);

Router.patch(
  '/anatomy-types/:id',
  AnatomyTypeController.update
);

Router.delete(
  '/anatomy-types/:id',
  AnatomyTypeController.delete
);

module.exports = Router;
