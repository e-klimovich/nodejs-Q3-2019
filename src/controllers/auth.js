import jwt from 'jsonwebtoken';

import { jwtSecretKey } from '../constants';

export const login = (req, res) => {
  const token = jwt.sign('payload', jwtSecretKey);

  res.end(token)
}