const { Router } = require('express');
const userServices = require('../services/user');

const router = Router();

router.post('/', async (req, res) => {
    const newUser = await userServices.createUser(req.body);

    return res.status(201).json({ user: newUser.getRaw()});
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const token = await userServices.userLogin(email, password);

    return res.status(200).json({ token });
});

// delete in future

router.get('/', async (req, res) => {
    const users = await userServices.getUsers();

    return res.status(200).json({ users });
});

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const user = await userServices.getUser(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
});

router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;
    await userServices.deleteUserById(userId);

    return res.status(200).json({ message: 'User deleted successfully' });
});

router.put('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { firstName, lastName, password } = req.body;
    const updatedUser = await userServices.updateUser(userId, { firstName, lastName, password });

    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json({ message: 'User updated sucessfully' });
});

module.exports = router
