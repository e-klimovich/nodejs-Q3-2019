const Product = require('../models').product;

const getAll = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.json({
        status: 200,
        data: products,
      })
    })
}

const getById = (req, res) => {
  const { id } = req.params;

  Product.findByPk(id)
    .then((product) => {
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

  Product.findByPk(id)
    .then((product) => {
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

  Product.findOrCreate({ where: { name, brand }, default: { name, brand, price, options, reviews } })
    .then(([product, created]) => {
      if (created) {
        res.json({
          status: 200,
        })
      } else {
        res.json({
          error: 'not created',
        })
      }
    })
}

module.exports = {
  getAll,
  getById,
  getReviews,
  add,
}