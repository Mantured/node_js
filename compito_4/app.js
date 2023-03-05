const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminDataUser = require('./routes/users');
const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/users',adminDataUser.routes);
app.use(indexRoutes);
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) =>{
    res.status(404).render('404', {
        pageTitle: 'Page not Found'
    });
});


app.listen(3000);