const Sequelize = require("sequelize");

const sqlz = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER,process.env.POSTGRES_PASSWORD,{
    host: process.env.POSTGRES, 
    dialect: "postgres",
    operatorsAliases: false
});

module.exports = sqlz;
global.sequelize = sqlz;
// exports.connect = sequelize;