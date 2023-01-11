const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoutes);
app.use(indexRoutes);
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);