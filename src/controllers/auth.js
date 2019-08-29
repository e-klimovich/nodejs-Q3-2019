import jwt from 'jsonwebtoken';

import { jwtSecretKey } from '../constants';

export const login = (req, res) => {
  const { email, name, password } = req.body;
  const token = jwt.sign({ email, password }, jwtSecretKey);

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

export const loginFacebook = (req, res) => {
  res.redirect('/')
}