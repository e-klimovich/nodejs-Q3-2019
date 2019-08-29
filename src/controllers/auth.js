import jwt from 'jsonwebtoken';

import { jwtSecretKey } from '../constants';

const _mockedUser = { username: 'John', password: '42' };

export const login = (req, res) => {
  const token = jwt.sign(_mockedUser, jwtSecretKey);

  res.json({ token })
}