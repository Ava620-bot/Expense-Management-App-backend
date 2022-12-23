const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId:{
      type:String,
      required: true
    },
    amount:{
        type: Number,
        required: [true, 'amount is required']
    },
    type:{
      type: String,
      required: [true, 'type is required']
    },
    category:{
        type: String,
        required: [true, 'category is required'],
    },
    reference:{
        type: String,
       
    },
    description:{
        type: String,
        required: [true, 'description is required']
    },
    date:{
        type: Date,
        required:[true, 'date is required']
    }
},
{timestamps: true} //it will capture the date and time if the changes occured
);



//export
const transactionModel = mongoose.model('transactions', transactionSchema)

module.exports = transactionModel;