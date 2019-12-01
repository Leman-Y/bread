'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserFinancialInfo extends Model {
   
  }

  UserFinancialInfo.init({
    userId: { type: DataTypes.INTEGER },
    currentSavingPercent: { type: DataTypes.DOUBLE},
    currentSavingActual: {type: DataTypes.DOUBLE},
    currentSpendingPercent: {type: DataTypes.DOUBLE},
    currentSpendingActual: {type: DataTypes.DOUBLE},
    desiredSavingPercent: {type: DataTypes.DOUBLE},
    desiredSavingActual: {type: DataTypes.DOUBLE},
    desiredSpendingPercent: {type: DataTypes.DOUBLE},
    desiredSpendingActual: {type: DataTypes.DOUBLE},
    incomeTimeBeginning: { type: DataTypes.TIME},
    updatedTime: { type: DataTypes.NOW },
  }, {
    sequelize,
    modelName: 'user_financial_info'
  });

  UserFinancialInfo.associate = (models) => {
    // associations can be defined here
  };

  // User.beforeSave((user, options) => {
  //   if(user.password) {
  //     user.passwordHash = bcrypt.hashSync(user.password, 10);
  //   }
  // });

  return UserFinancialInfo;
};