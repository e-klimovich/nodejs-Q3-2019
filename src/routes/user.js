const router = require('express').Router();

const user = require('../controllers/user');

router.get('/', user.getAll);
router.get('/:id', user.getById);
router.post('/', user.add);

module.exports = router;
