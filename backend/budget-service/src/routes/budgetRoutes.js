const express = require('express');
const router = express.Router();
const BudgetController=require('../controllers/budgetController')
const auth=require('../middleware/auth')

router.post('/',auth, BudgetController.createBudget);
router.get('/:month',auth,BudgetController.getBudget);
router.delete('/',auth,BudgetController.deleteBudget)

module.exports = router;
