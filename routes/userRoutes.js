const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const userController = require('../controllers/userController');

// Route for user registration
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(200).json({ message: "User registered successfully" });
});

// Route to fetch all users
router.get('/users', userController.getUsers);

module.exports = router;
