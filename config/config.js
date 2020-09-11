
require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": "nensi",
    "password": "password",
    "database": "tiranatreg",
    "host": "localhost",
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

