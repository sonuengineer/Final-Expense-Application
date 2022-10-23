const express = require('express');

const userController = require('../controller/user');
const expenseController = require('../controller/expense')


const router = express.Router();


router.post('/signup', userController.signup);

router.post('/login', userController.login)

router.post('/addexpense', expenseController.addexpense )

router.get('/getexpenses', expenseController.getexpenses )

router.delete('/deleteexpense/:expenseid', expenseController.deleteexpense)

module.exports = router;