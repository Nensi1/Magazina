'use strict';
var DataTypes = require('sequelize/lib/data-types');

//1.  sequelize migration:create --name create_invoice_table
//2. sequelize db:migrate

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users",{
      id: 
      {
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
    nipt: 
      {
        type: Sequelize.STRING(10),
        allowNull:false,
        unique: true
      },
    username: 
      {
        type: Sequelize.STRING(10),
      },
    phone: 
      {
        type: Sequelize.STRING(20),
        validate: {
        not: ["[a-z]",'i'], // no  letters
        isNumeric: true,          // will only allow numbers
      },
    },
    email: {
        type: Sequelize.STRING(20),
        validate: {
            isEmail: true, 
    }
  }, 
    password:
    {
      type: Sequelize.CHAR(60),
      allowNull:false,
    },
    createdAt: {
      type: Sequelize.DATE(),
      // allowNull: false,
      // _autoGenerated: true,
     // type: now() https://github.com/sequelize/sequelize-auto/issues/55
    },
    updatedAt: {
      type: Sequelize.DATE(),
      // type: now()
    },
    deletedAt: {
      type: Sequelize.DATE(),
      // type: now()
    }
    })
  },

  down: (queryInterface, Sequelize) => {
      //Return a promise to correctly handle asynchronicity.
      return queryInterface.dropTable('Users');

  }
};
