import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import { jwtSecretKey } from '../constants';

export default (passport) => {
  // JWT strategy config
  passport.use(new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey : jwtSecretKey,
    },
    (payload, done) => {
      const { email } = payload;
      return done(null, { username: email })
    }
  ))

  // Local strategy config
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (username, password, done) => {
      done(null, { username })
    }
  ))

  // Facebook strategy config
  passport.use(new FacebookStrategy(
    {
      clientID: '351002865850718',
      clientSecret: '4045411a7762022dc163985b5d48d2c1',
      callbackURL: 'http://localhost:8080/auth/facebook/callback',
      profileFields: ['displayName'],
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { username: profile.displayName })
    }
  ))

  passport.serializeUser((user, done) => {
    done(null, user);
  })

  passport.deserializeUser((user, done) => {
    done(null, user);
  })
}