const express = require('express');
const router = express.Router();


// Load each controller
const authController = require('./auth');
const postsController = require('./posts.js');
const incomesController = require('./incomes.js');
const transactionsController = require('./transactions.js');
const transactionsCategoriesController = require('./transactionsCategories.js');
const userFinancialInfoController = require('./userFinancialInfo.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/posts', postsController);
router.use('/incomes', incomesController);
router.use('/transactions', transactionsController);
router.use('/transactionsCategories', transactionsCategoriesController);
router.use('/userFinancialInfo', userFinancialInfoController);
router.use('/application-configuration', appConfigController);


module.exports = router;