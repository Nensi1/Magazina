'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
    {
      id: 
        {
          type: DataTypes.INTEGER(11),
          allowNull:false,
          autoIncrement: true,
          primaryKey: true
            },
      nipt: 
        {
          type: DataTypes.STRING(10),
          allowNull:false,
          defaultValue: '',
        },
      username: 
        {
          type: DataTypes.STRING(10),
          allowNull:false,
          defaultValue: ''
        },
      phone:  
        {
          type: DataTypes.STRING(20),
          defaultValue: '',
          validate: {
          not: ["[a-z]",'i'], // no  letters
          isNumeric: true,          // will only allow numbers
        },
    },
    email: {
        type: DataTypes.STRING(20),
        validate: {
            isEmail: true, 
    }
  }, 
    password:
    {
      type: DataTypes.STRING(30),
      allowNull:false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      _autoGenerated: true,
     // type: now() https://github.com/sequelize/sequelize-auto/issues/55
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      _autoGenerated: true,
      // type: now()
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      _autoGenerated: true,
      // type: now()
    }
  },
  

  );
  User.associate = function(models) {
      models.user.hasMany(models.Invoice,{ onDelete: 'CASCADE' });
    };
  return User;
};

// {
//   getterMethods   : {
//   id   : function()  { return this.getDataValue('id'); },
//   nipt : function()  { return this.getDataValue('nipt') },
//   phone : function()  { return this.getDataValue('phone') },
//   email : function()  { return this.getDataValue('email') },
//   password : function()  { return this.getDataValue('password') },

// },
// setterMethods   : {
//   id   : function()  { return this.setDataValue('tiidtle'); },
//   nipt : function()  { return this.setDataValue('nipt') },
//   phone : function()  { return this.setDataValue('phone') },
//   email : function()  { return this.setDataValue('email') },
//   password : function()  { return this.setDataValue('password') },

// } 
