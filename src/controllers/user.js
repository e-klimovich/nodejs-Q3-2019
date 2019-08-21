export const getAll = (req, res) => {
  res.json({
    status: 200,
    data: global.db.users,
  })
}

export const getById = (req, res) => {
  const { id } = req.params;
  global.db.users.every((user) => {
    if (user.id === id) {
      res.json({
        status: 200,
        data: user
      })
      return false
    }

    res.status(404).json({
      status: 404,
      error: 'User not found',
    })
  })
}

export const add = (req, res) => {
  const { id, name } = req.body;

  if (id && typeof(id) === 'string' && name && typeof(name) === 'string') {
    global.db.users.push({ id, name });

    res.json({
      status: 200,
    })
  }

  res.status(422).json({
    status: 422,
    error: 'Invalid data format'
  })
}