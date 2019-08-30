import { Router } from 'express';
import passport from 'passport';

import * as auth from '../controllers/auth';

const router = Router();

router.post('/', passport.authenticate('local', { session: true }),  auth.login)
router.get('/facebook', passport.authenticate('facebook'))
router.get('/facebook/callback', passport.authenticate('facebook'), auth.loginFacebook)

export default router