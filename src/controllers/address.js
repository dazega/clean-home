const { Router } = require('express');
const auth = require('../middlewares/auth');
const addressService = require('../services/address');

const router = Router();

router.post('/', auth, async (req, res) => {
    const address = await addressService.createAddress(req.body, req.user.id);

    return res.status(200).json({ address: address.getRaw() });
});

module.exports = router;