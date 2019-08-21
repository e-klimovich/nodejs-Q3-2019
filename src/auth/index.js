import passportJWT from 'passport-jwt';

import { jwtSecretKey } from '../constants';

const Strategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export default (passport) => {
  passport.use(new Strategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey : jwtSecretKey,
    },
    (payload, done) => {
      return done(null, { user: 42 })
    }
  ))

  passport.serializeUser((user, done) => {
    done(null, user);
  })
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  })
}