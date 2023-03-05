const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list' , {
            prods: products, 
            pageTitle: 'Shop', 
            path:'/', 
            hasProducts: products.length > 0, 
            activeShop: true,
            productCss: true,
        });
    });
}

exports.getIndex = (rew, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index' , {
            prods: products, 
            pageTitle: 'Shop', 
            path:'/', 
            hasProducts: products.length > 0, 
            activeShop: true,
            productCss: true,
        });
    });
}

exports.getCart = (rew, res, next) => {
    res.render('shop/index', {
        path: '/cart',
        pageTitle: 'YourCart'
    });
};

exports.getCheckout = (rew, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};