const User = require('../models/user');

const getAll = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      res.end();
    }

    res.json({
      data: users,
    })
  })
}

const getById = (req, res) => {
  const { id } = req.params;

  User.findById(id, (err, user) => {
    if (err) {
      console.log(err);
      res.end();
    }

    if (user) {
      res.json({
        data: user,
      })
    } else {
      res.status(404).json({
        error: 'User not found',
      })
    }
  })
}

const add = (req, res) => {
  const { name, email, age } = req.body;

  const user = new User({
    name,
    email,
    age
  })

  user.save((err, user) => {
    if (err) {
      res.json({
        error: 'not created',
      })
    }

    res.json({
      status: 'User created'
    })
  })
};

module.exports = {
  getAll,
  getById,
  add,
};
