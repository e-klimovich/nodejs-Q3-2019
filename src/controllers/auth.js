const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { email, name, password } = req.body;
  const token = jwt.sign({ email, password }, process.env.JWT_SECRET_KEY);

  res.json({
    data: {
      user: {
        email,
        name,
      }
    },
    token: token,
  })
}

const loginFacebook = (req, res) => {
  res.redirect('/')
}

module.exports = {
  login,
  loginFacebook,
}