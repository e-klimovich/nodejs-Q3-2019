import { Router } from 'express';
import * as users from '../controllers/user';

const router = Router();

router.get('/', users.getAll)

router.get('/:id', users.getById)

router.post('/', users.add)

export default router
