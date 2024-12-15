// const express = require('express');
// const router = express.Router();

// const { loginUser} = require('../controllers/authController');
// const {body} = require('express-validator');
// const { getUserData } = require('../controllers/authController');
// const { refreshAccessToken } = require('../service/refreshAccessToken');
// const { protectRoute } = require('../middleware/protectRoute');

// router.post('/v1/logins', [
//     body('email').isEmail().withMessage('Please provide a valid email'),
//     body('password').not().isEmpty().withMessage('Password is required'),
// ], loginUser);

// router.get('/v1/myprofile', getUserData);

// router.post('/v1/refresh-token', refreshAccessToken);

// router.post('/v1/create-resource', protectRoute, (req, res) => {
//     res.status(200).json({message:'Resource created successfully'});
// });

// module.exports = router;