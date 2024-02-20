const { Product } = require('../models/Product.model');
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price,desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}