'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
   
  }

  Income.init({
    userId: { type: DataTypes.INTEGER },
    incomeType: { type: DataTypes.ENUM('Monthly Income', 'Savings')},
    incomeTimeType: { type: DataTypes.ENUM('Monthly', 'Hourly', 'Annually','Biweekly')},
    incomeTimeBeginning: { type: DataTypes.TIME},
    incomeTimeEnd: { type: DataTypes.TIME },
    updatedTime: { type: DataTypes.TIME },
  }, {
    sequelize,
    modelName: 'income'
  });

  Income.associate = (models) => {
    // associations can be defined here
  };

  // User.beforeSave((user, options) => {
  //   if(user.password) {
  //     user.passwordHash = bcrypt.hashSync(user.password, 10);
  //   }
  // });

  return Income;
};