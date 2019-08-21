import { Router } from 'express';

import * as auth from '../controllers/auth';

const router = Router();

router.get('/tokin', auth.login)

export default router