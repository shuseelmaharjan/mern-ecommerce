const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users'); 

const { validationResult } = require('express-validator');

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the password with the hashed password in the database
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const payload = {
            userId: user._id,
            isAdmin: user.isAdmin,
        };

        // Generate a JWT token
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        const refresh_token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

        console.log('JWT_SECRET:', process.env.JWT_SECRET);

        res.status(200).json({
            message: 'Login successful',
            access_token,
            refresh_token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { loginUser };
