'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
   
  }

  Transaction.init({
    userId: { type: DataTypes.INTEGER },
    transactionCategoryType: {type: DataTypes.STRING},
    transactionSpentOn: {type: DataTypes.STRING},
    transactionAmount: { type: DataTypes.DOUBLE},
    transactionTime: { type: DataTypes.TIME },
  }, {
    sequelize,
    modelName: 'transaction'
  });

  Transaction.associate = (models) => {
    // associations can be defined here
  };

  // User.beforeSave((user, options) => {
  //   if(user.password) {
  //     user.passwordHash = bcrypt.hashSync(user.password, 10);
  //   }
  // });

  return Transaction;
};