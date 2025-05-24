const mongoose=require('mongoose')
const budgetItemSchema = new mongoose.Schema({
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget',
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BudgetCategory',
    required: true
  },
  name: {
    type: String,
    required: true,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('BudgetItem', budgetItemSchema);
