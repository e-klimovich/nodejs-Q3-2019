const passportJwt = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook');

const JWTStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

module.exports = (passport) => {
  // JWT strategy config
  passport.use(new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey : process.env.JWT_SECRET_KEY,
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
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
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
};
