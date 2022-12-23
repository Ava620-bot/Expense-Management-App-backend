
const express = require("express");
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require("../controllers/transactionCtrl");



//router object
const router = express.Router();

//routes
//add a transaction
router.post('/add-transaction', addTransaction)

//get all transaction
router.post('/get-transaction', getAllTransaction)

//edit a transaction
router.post('/edit-transaction', editTransaction)

//delete a transaction
router.post('/delete-transaction', deleteTransaction)

module.exports = router;