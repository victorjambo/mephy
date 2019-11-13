const functions = require('firebase-functions');

const { db: { database, user, password, host } } = functions.config();

module.exports = {
  development: {
    username: 'victormutai',
    password: 'password',
    database: 'mephy_development',
    dialect: 'postgres',
    options: {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  },
  test: {
    username: 'victormutai',
    password: 'password',
    database: 'mephy_development',
    options: {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  },
  production: {
    username: user,
    password,
    database,
    options: {
      host,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  }
}
