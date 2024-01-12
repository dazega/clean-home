const { Router } = require('express');
const userRouter = require('./user');
const addressRouter = require('./address');
const profileRouter = require('./profile');

const router = Router();

router.use('/user', userRouter);
router.use('/address', addressRouter);
router.use('/profile', profileRouter);

module.exports = router;
