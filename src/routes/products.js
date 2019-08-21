import { Router } from 'express';
import * as products from '../controllers/product';

const router = Router();

router.get('/', products.getAll)

router.get('/:id', products.getById)

router.get('/:id/:reviews', products.getReviews)

router.post('/', products.add)

export default router
