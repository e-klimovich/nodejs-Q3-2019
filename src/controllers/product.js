import { Product } from '../models';

export const getAll = (req, res) => {
  res.json({
    status: 200,
    data: global.db.products,
  })
}

export const getById = (req, res) => {
  const { id } = req.params;
  const foundProduct = global.db.products.find((product) => product.id === id);

  if (foundProduct) {
    res.json({
      status: 200,
      data: foundProduct,
    })
  } else {
    res.status(404).json({
      status: 404,
      error: 'Product not found',
    })
  }
}

export const getReviews = (req, res) => {
  const { id, reviews } = req.params;

  if (reviews !== 'reviews') {
    res.status(404).end()
  }

  global.db.products.every((product) => {
    if (product.id === id) {
      res.json({
        status: 200,
        data: product.reviews,
      })
      return false
    }

    res.status(404).json({
      status: 404,
      error: 'Product not found',
    })
  })
}

export const add = (req, res) => {
  const product = new Product(req.body);

  if (product.isValid()) {
    global.db.products.push(req.body);

    res.json({
      status: 200,
    })
  }

  res.status(422).json({
    status: 422,
    error: 'Invalid data format'
  })
}
