const { Pool } = require('pg');
const functions = require('firebase-functions');


const { db, con: { project, region, instance } } = functions.config();

module.exports = new Pool({
  max: 1,
  host: `/cloudsql/${project}:${region}:${instance}`,
  ...db
});
