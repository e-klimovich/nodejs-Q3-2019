const user = require('../models/user');

const getAll = (req, res) => {
  user.findAll()
    .then((users) => {
      res.json({
        status: 200,
        data: users,
      })
    })
    .catch((err) => {
      console.error('Error', err)
    })
};

const getById = (req, res) => {
  // const { id } = req.params;
  // const foundUser = global.db.users.find((user) => user.id === id);

  // if (foundUser) {
  //   res.json({
  //     status: 200,
  //     data: foundUser,
  //   })
  // } else {
  //   res.status(404).json({
  //     status: 404,
  //     error: 'Product not found',
  //   })
  // }
  console.log(42)
};

const add = (req, res) => {
  // const user = new User(req.body);

  // if (user.isValid()) {
  //   global.db.users.push(req.body);

  //   res.json({
  //     status: 200,
  //   })
  // }

  // res.status(422).json({
  //   status: 422,
  //   error: 'Invalid data format'
  // })
  console.log(42)
};

module.exports = {
  getAll,
  getById,
  add,
};
