const { Router } = require('express');
const userRouter = require('./user');
const addressRouter = require('./address');

const router = Router();

router.use('/user', userRouter);
router.use('/address', addressRouter);

module.exports = router;
