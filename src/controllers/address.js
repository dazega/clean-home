const { Router } = require('express');
const auth = require('../middlewares/auth');
const addressService = require('../services/address');
const userService = require('../services/user');

const router = Router();

router.post('/', auth, async (req, res) => {
    const address = await addressService.createAddress(req.body, req.user.id);

    return res.status(200).json({ address: address.getRaw() });
});

router.get('/:addressId', auth, async (req, res) => {
    const { addressId } = req.params;
    const { user } = req;
    const address = await addressService.getAddressById(addressId, user);

    return res.status(200).json({ address: address.getRaw() });
});

router.get('/', auth, async (req, res) => {
    const { id } = req.user;
    const user = await userService.getUser(id);
    const addresses = (await user.getAddresses()).map(address => address.getRaw());

    return res.status(200).json({ address: addresses });
});

module.exports = router;