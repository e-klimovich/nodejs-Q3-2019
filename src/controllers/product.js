const Product = require('../models/product');

const getAll = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
      res.end();
    }

    res.json({
      status: 200,
      data: products,
    })
  })
}

const getById = (req, res) => {
  const { id } = req.params;

  Product.findById(id, (err, product) => {
    if (err) {
      console.log(err);
      res.end();
    }

    if (product) {
      res.json({
        status: 200,
        data: product,
      })
    } else {
      res.status(404).json({
        status: 404,
        error: 'Product not found',
      })
    }
  })
}

const getReviews = (req, res) => {
  const { id, reviews } = req.params;

  if (reviews !== 'reviews') {
    res.status(404).end()
  }

  Product.findById(id, (err, product) => {
    if (err) {
      console.log(err);
      res.end();
    }

    if (product) {
      res.json({
        status: 200,
        data: product.reviews,
      })
    } else {
      res.status(404).json({
        status: 404,
        error: 'Product not found',
      })
    }
  })
}

const add = (req, res) => {
  const { name, brand, price, options, reviews } = req.body;

  const product = new Product({
    name,
    brand,
    price,
    options,
    reviews
  })

  product.save((err, product) => {
    if (err) {
      res.json({
        error: 'not created',
      })
    }

    res.json({
      status: 200,
    })
  })
}

module.exports = {
  getAll,
  getById,
  getReviews,
  add,
}