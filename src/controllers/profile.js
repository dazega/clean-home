const { Router } = require('express');
const auth = require('../middlewares/auth');
const userServices = require('../services/user');

const router = Router();

router.get('/', auth, async (req, res) => {
    const { user } = req;
    const userInstance = await userServices.getUserById(user.id);
    const profile = userInstance.getProfile();

    return res.status(200).json({ profile: profile.getRaw() });
});

module.exports = router;
