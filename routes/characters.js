const express = require('express')

const router = express.Router();

const userController = require('../controllers/user-controller')

router.get('/characters', userController.getCharacters);

module.exports = router;