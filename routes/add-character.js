const express = require('express')
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();
const characters = [];

router.get('/add-character', (req, res, next) =>{

    res.render('add-character', {

        docTitle: 'Add Character',
        path: '/user'
    });
});

router.post('/add-character', (req, res, next) =>{
    
    characters.push({
        name: req.body.name,
        level: req.body.level,
        image: req.body.image,
        class: req.body.class
    });
    res.redirect('/characters');
});

exports.routes = router;
exports.characters = characters;