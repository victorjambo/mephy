var knex = require('knex');
var config = require('./config');

var env = process.env.NODE_ENV || 'production';

// export db connection
module.exports = knex(config[env]);
