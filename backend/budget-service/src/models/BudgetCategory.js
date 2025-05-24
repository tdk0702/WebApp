const mongoose=require('mongoose')
const budgetCategorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  budgetId:{
    type: mongoose.Schema.Types.ObjectId,
    required:true
  },
  color: String,
  icon: String
}, { timestamps: true });

module.exports = mongoose.model('BudgetCategory', budgetCategorySchema);
