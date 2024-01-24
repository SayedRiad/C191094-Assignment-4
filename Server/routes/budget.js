var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const availableBudget = 10000.00;
    res.send(JSON.stringify(availableBudget));
});

router.get('/income', function(req, res, next) {
    const income = 5000.00;
    res.send(JSON.stringify(income));
});

router.post('/income', function(req, res, next) {
    console.log(req.body)
    let updateIncome = req.body?.ammount;
    res.send(JSON.stringify(updateIncome));
 });

router.get('/expense', function(req, res, next) {
    const expense = 1000.00;
    res.send(JSON.stringify(expense));
});

router.post('/expense', function(req, res, next) {
    console.log(req.body)
    let updateExpense = req.body?.ammount;
    res.send(JSON.stringify(updateExpense));
 });

module.exports = router;
