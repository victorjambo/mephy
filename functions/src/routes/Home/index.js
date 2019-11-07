const express = require('express');

const Router = express.Router();

Router.get('/', (_, res) => res.json({
  message: 'Welcome to Mephys mothership'
}));

module.exports = Router;
