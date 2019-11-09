const { Pool } = require('pg');
const functions = require('firebase-functions');


const { db } = functions.config();

module.exports = new Pool({
  max: 1,
  ...db
});
