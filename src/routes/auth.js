import { Router } from 'express';

import * as auth from '../controllers/auth';

const router = Router();

router.get('/token', auth.login)

export default router