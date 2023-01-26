const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const admindData = require('./admin');
const router = express.Router();


router.get('/', (req, res, next) => {
    /* console.log(admindData.products); */
    const products = admindData.products;
    res.render('shop' , {prods: products, docTitle: 'Shop'});
});


module.exports = router;