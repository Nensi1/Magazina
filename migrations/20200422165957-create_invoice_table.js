'use strict';
var DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Invoices",{
      id: 
        {
          type: Sequelize.INTEGER(11),
          allowNull:false,
          autoIncrement: true,
          primaryKey: true
        },
      total: 
        {
          type: Sequelize.INTEGER(10),
          allowNull:false,
        },
      totalNoVat: 
        {
            type: Sequelize.INTEGER(10),
            allowNull:false,
        },
    payment_type:
        {
            type: Sequelize.STRING(10),
            allowNull:false,
        },
    status:
        {
            type: Sequelize.STRING(10),
            allowNull:false,
        },
    date:
        {
            type: Sequelize.DATE(),
            allowNull:false,
        },     
        createdAt: {
          type: Sequelize.DATE(),
          allowNull: false,
          _autoGenerated: true,
          allowNull: false
         // type: now() https://github.com/sequelize/sequelize-auto/issues/55
        },
        updatedAt: {
          type: Sequelize.DATE(),
          allowNull: false,
          _autoGenerated: true,
          allowNull: false
          // type: now()
        },
        deletedAt: {
          type: Sequelize.DATE(),
      allowNull: false,
      _autoGenerated: true,
      allowNull: false
          // type: now()
        },
    UserId: {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  });
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Invoices');

  }
};
