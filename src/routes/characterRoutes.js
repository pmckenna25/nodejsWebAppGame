const express = require('express');

const router = express.Router();

const userController = require('../controllers/user-controller');

router.get('/characters', userController.getCharacters);

router.get('/add-character', userController.getAddCharacter);

router.post('/add-character', userController.postAddCharacter);

router.get('/character/:Id', userController.getCharacterDetails);

router.post('/delete', userController.deleteCharacter);

router.get('/edit-character/:Id', userController.getEditCharacter);

router.post('/edit-character', userController.postEditCharacter);

router.post('/delete-character/:Id', userController.deleteCharacter);

module.exports = router;
