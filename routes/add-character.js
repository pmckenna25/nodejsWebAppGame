const express = require('express')

const router = express.Router();

const userController = require('../controllers/user-controller');

router.get('/add-character', userController.getAddProduct);

router.post('/add-character', userController.postAddCharacter);

module.exports = router;