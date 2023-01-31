const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');
const adminDataUser = require('./users');

const router = express.Router();

router.get('/', (req, res, next) => {
    const users = adminDataUser.users;
    res.render('index' , {
        users: users, 
        pageTitle: 'Indice Utenti', 
        path:'/', 
        hasUsers: users.length > 0, 
        activeIndex: true,
        usersCss: true,
    });
});

module.exports = router;