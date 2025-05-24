const Budget = require('../models/Budget');
const BudgetService = require('../service/budgetService');

exports.createBudget = async (req, res, next) => {
  try {
    const userId=req.user.userId;
    const {  month, totalAmount } = req.body;
    const budget = await BudgetService.createBudget({ userId, month, totalAmount });
    res.status(201).json("Create Budget successfully");
  } catch (err) {
    next(err);
  }
};

exports.getBudget = async (req, res, next) => {
  try {
    const userId=req.user?.userId;
    const { month } = req.params;
    const items=await BudgetService.getBudgetByUserAndMonth({userId,month})
    
    console.log(items)
    if (!items) {
      return res.status(404).json({ error: 'Budget not found' });
    }
    res.json(items)
  } catch (err) {
    next(err);
  }
};
exports.deleteBudget=async(req,res,next)=>{
  try{
    const userId=req.user?.userId;
    const deletes=await BudgetService.deleteBudget(userId);
    if(!deletes) return ("Error in delete User budget")
    return res.status(201).json(deletes)
  }
  catch(err){
    next(err)
  }
}