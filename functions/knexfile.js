const functions = require('firebase-functions');

const { db } = functions.config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mephy_development'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/mephy_test'
  },

  production: {
    client: 'pg',
    connection: db,
    pool: {
      min: 5,
      max: 5,
      createTimeoutMillis: 30000,
      idleTimeoutMillis: 600000,
      createRetryIntervalMillis: 200,
      acquireTimeoutMillis: 600000
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }
};
