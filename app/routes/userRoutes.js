const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration route
router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);
router.post('/logout/:id',userController.logoutUser)
router.get('/:id', userController.getSingleUser)
module.exports = router;
