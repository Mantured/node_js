const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

const users = [];

// /admin/add-product => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User', 
    path: '/users/add-user',
    formsCSS: true,
    userCSS: true,
    activeAddUser: true

})
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
  users.push({ 
    name: req.body.name, 
    img: req.body.url 
  });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;