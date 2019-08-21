export const getAll = (req, res) => {
  res.json({
    status: 200,
    data: global.db.products,
  })
}

export const getById = (req, res) => {
  const { id } = req.params;
  global.db.products.every((product) => {
    if (product.id === id) {
      res.json({
        status: 200,
        data: product
      })
      return false
    }

    res.status(404).json({
      status: 404,
      error: 'Product not found',
    })
  })
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
  const { id, reviews } = req.body;

  if (id && typeof(id) === 'string' && reviews && Array.isArray(reviews)) {
    global.db.products.push({ id, reviews });

    res.json({
      status: 200,
    })
  }

  res.status(422).json({
    status: 422,
    error: 'Invalid data format'
  })
}
