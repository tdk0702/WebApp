import Transaction from "../models/Transaction";

exports.getTransactions=async(userId,month)=>{
  try {
    const transactions=await Transaction.find({userId,month})
    return transactions
  } catch (error) {
    throw error
  }
}
exports.createTransaction=async(type, amount, date, categoryId, description,itemId)=>{


  
     return await Transaction.save({type, amount, date, categoryId, description,itemId})
}
