'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TransactionCategory extends Model {
   
  }

  TransactionCategory.init({
    userId: { type: DataTypes.INTEGER },
    category: {type: DataTypes.STRING},
    totalAmountSpent: {type: DataTypes.DOUBLE},
  },{
    sequelize,
    modelName: 'transaction_category'
  });

  TransactionCategory.associate = (models) => {
    // associations can be defined here
  };

  // User.beforeSave((user, options) => {
  //   if(user.password) {
  //     user.passwordHash = bcrypt.hashSync(user.password, 10);
  //   }
  // });

  return TransactionCategory;
};