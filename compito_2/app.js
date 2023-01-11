const http = require('http');

const express = require('express');

const app = express();

/* app.use('/', (req, res, next) => {
    console.log('First step middelware');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('Second step middelware');
}); */

app.use('/users', (req, res, next) => {
    console.log('/ users middleware');
    res.send("<h1>Users Middleware</h1>")
});
app.use('/', (req, res, next) => {
    console.log('/ middelware');
    res.send("<h1>Only middleware</h1>")
});


app.listen(3000);