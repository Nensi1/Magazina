'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', 
    {
      id: 
        {
          type: DataTypes.INTEGER(11),
          allowNull:false,
          autoIncrement: true,
          primaryKey: true
        },
      total: 
        {
          type: DataTypes.INTEGER(10),
          allowNull:false,
        },
      totalNoVat: 
        {
            type: DataTypes.INTEGER(10),
            allowNull:false,
        },
    payment_type:
        {
            type: DataTypes.STRING(10),
            allowNull:false,
        },
    status:
        {
            type: DataTypes.STRING(10),
            allowNull:false,
        },
    date:
        {
            type: DataTypes.DATE(),
            allowNull:false,
        },  
    }       
  , {});
    
Invoice.associate = function (models) {
        models.Invoice.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      };
  return Invoice;
};