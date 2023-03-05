const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.postAddProduct = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products' , {
            prods: products, 
            pageTitle: 'Admin Prodcts', 
            path:'/admin/products', 
            hasProducts: products.length > 0, 
            activeShop: true,
            productCss: true,
        });
    });
}