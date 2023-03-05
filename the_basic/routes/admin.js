const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();


//GET
router.get('/admin-product', adminController.getAddProduct);

//GET
router.post('/products');

//POST
router.get('/add-product', adminController.postAddProduct);

module.exports = router;
