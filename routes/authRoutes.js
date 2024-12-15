const express = require('express');
const router = express.Router();

const { loginUser} = require('../controllers/authController');
const {body} = require('express-validator');

router.post('/v1/login', [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').not().isEmpty().withMessage('Password is required'),
], loginUser);

module.exports = router;