const Transaction = require('../models/Transaction');
const config=require('dotenv')

const axios=require('axios')
config.config();
const BUDGET_BASE_URL=process.env.BUDGET_SERVICE;

exports.getBudget=async(req,res)=>{
  try {
      const userId=req.user?.userId
      const month="2025-04"
      const res=await axios.get(BUDGET_BASE_URL,{
        params:{month}
      })
  }
  catch(err){
    res.status(500).json({ message: 'Error getBudgetService', error: err.message });
  }
}

exports.createTransaction = async (req, res) => {
    try {
        const userId=req.user.userId;
        const { type, amount, date, category, description } = req.body;
        const transaction = new Transaction({
          userId,
          type,
          amount,
          date,
          category,
          description
      });
      await transaction.save();
        res.status(201).json("Transaction Created");
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
  const { type, category, month, year } = req.query;
  const userId = req.user?.userId // lấy từ token hoặc query
  const filter = {};

  if (!userId) {
    return res.status(400).json({ message: 'Missing userId' });
  }

  filter.userId = userId;

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (month && year) {
    const startDate = new Date(`${year}-${month}-01`);
    const endDate = new Date(`${year}-${month}-31`);
    filter.date = { $gte: startDate, $lte: endDate };
  }

  try {
    const transactions = await Transaction.find(filter)
      .sort({ date: -1 })
      .limit(100);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error: error.message });
  }
};


exports.updateTransaction = async (req, res) => {
    const { id } = req.params;
    const { type, amount, date, category, description } = req.body;
    try {
      const updatedTransaction = await Transaction.findByIdAndUpdate(id, { type, amount, date, category, description }, { new: true });
      if (!updatedTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      res.status(200).json(updatedTransaction);
    } catch (error) {
      res.status(500).json({ message: 'Error updating transaction', error: error.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedTransaction = await Transaction.findByIdAndDelete(id);
      if (!deletedTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting transaction', error: error.message });
    }
};

exports.getTransactionSummary = async (req, res) => {
  const { year } = req.query;
  const filter = {};
  if (year) filter.date = { $gte: new Date(`${year}-01-01`), $lte: new Date(`${year}-12-31`) };
  
};



