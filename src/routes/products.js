const router = require('express').Router();
const product = require('../controllers/product');

router.get('/', product.getAll);
router.get('/:id', product.getById);
router.get('/:id/:reviews', product.getReviews);
router.post('/', product.add);

module.exports = router;
