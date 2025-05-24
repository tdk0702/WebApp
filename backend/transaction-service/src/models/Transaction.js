const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    itemId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Item',
        required: true
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);
