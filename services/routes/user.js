const router = require('express').Router();
const userController = require('../controller/users');

router.get('/',userController.index);
router.get('/:id',userController.get);
router.post('/', userController.create);

module.exports = router;
