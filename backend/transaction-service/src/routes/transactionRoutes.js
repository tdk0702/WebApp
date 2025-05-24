const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/TransactionController')
const auth=require('../middleware/auth')

// Transaction routes
router.get('/',auth,transactionController.getTransactions);
router.post('/',auth,transactionController.createTransaction);

module.exports = router; 