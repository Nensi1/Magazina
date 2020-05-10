
require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    // "username": process.env.DB_USERNAME,
    // "password": process.env.DB_PASSWORD,
    // "database": process.env.DB_DATABASE,
    // "host": process.env.DB_HOST,
    // "dialect": "postgres"
  }
};
