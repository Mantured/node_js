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

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        console.log(product);
    })
    res.redirect('/');
}

exports.getIndex = (rew, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index' , {
            prods: products, 
            pageTitle: 'Shop', 
            path:'/'
        });
    });
}

exports.getCart = (rew, res, next) => {
    res.render('shop/cart', {
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

exports.getOrders = (rew, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};