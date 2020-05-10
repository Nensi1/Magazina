'use strict';
var DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Invoices",{
      id: 
        {
          type: Sequelize.INTEGER(11),
          defaultValue: DataTypes.UUIDV4,
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
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt:Sequelize.DATE,
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
