const express = require('express')
const path = require('path');
const rootDir = require('../util/path');
const charData = require('./add-character');
const router = express.Router();

router.get('/characters', (req, res, next) =>{

    const character = charData.characters;

    res.render('characters', {
        chars: character,
        docTitle: 'Characters', 
        path: '/characters'
    });
});

module.exports = router;