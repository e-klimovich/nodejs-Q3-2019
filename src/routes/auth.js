const router = require('express').Router();
const auth = require('../controllers/auth');
const passport = require('passport');

router.post('/', passport.authenticate('local', { session: true }),  auth.login);
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook'), auth.loginFacebook);

module.exports = router;
