const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const admindData = require('./admin');
const router = express.Router();


router.get('/', (req, res, next) => {
    console.log(admindData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;