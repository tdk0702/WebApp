const express = require('express');
const router = express.Router();
const BudgetController=require('../controllers/budgetController')
const auth=require('../middleware/auth')
const BudgetCategory=require('../controllers/budgetCategory')

router.post('/:budgetId',auth,BudgetCategory.createBudgetCategory);
router.get('/:budgetId',auth,BudgetCategory.getBudgetCategory);
router.post('/BudgetItem/:categoryId',auth,BudgetCategory.createBudgetItemInCategory);
router.delete('/delete',auth,BudgetCategory.deleteCategoryOfBudget)
router.patch('/changeName',auth,BudgetCategory.changeNameOfCategory)
router.get('/fortransaction/:month',auth,BudgetCategory.getBudgetCategoryAndIteam)
module.exports = router;
