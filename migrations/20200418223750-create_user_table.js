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
        defaultValue: DataTypes.UUIDV4,
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
        allowNull:false,
      },
    phone: 
      {
        type: Sequelize.STRING(14),
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
      type: Sequelize.STRING(14),
      allowNull:false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
    })
  },

  down: (queryInterface, Sequelize) => {
      //Return a promise to correctly handle asynchronicity.
      return queryInterface.dropTable('Users');

  }
};
