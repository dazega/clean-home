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

router.delete('/:addressId', auth, async (req, res) => {
    const { user } = req;
    const { addressId } = req.params;

    await addressService.deleteAddress(addressId, user);

    return res.status(200).json({ status: 'ok' });
});

router.put('/:addresId', auth, async (req, res) => {
    const { addresId } = req.params;
    const { user } = req;
    const address = await addressService.updateAddress(addresId, req.body, user);

    return res.status(200).json({ address: address.getRaw() });
});

module.exports = router;