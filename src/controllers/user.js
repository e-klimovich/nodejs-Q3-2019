const User = require('../models').user;

const getAll = (req, res) => {
  User.findAll()
    .then((users) => {
      res.json({
        status: 200,
        data: users,
      })
    })
};

const getById = (req, res) => {
  const { id } = req.params;
  
  User.findByPk(id)
    .then((user) => {
      if (user) {
        res.json({
          status: 200,
          data: user,
        })
      } else {
        res.status(404).json({
          status: 404,
          error: 'User not found',
        })
      }
    })
};

const add = (req, res) => {
  const { name, email, age } = req.body;

  User.findOrCreate({ where: { email  }, defaults: { name, age } })
    .then(([user, created]) => {
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
};

module.exports = {
  getAll,
  getById,
  add,
};
