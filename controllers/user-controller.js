const Character = require('../models/Character');

exports.getWelcome = (req, res, next) =>{

    res.render('user/welcome-page', {
        docTitle: 'Welcome Page',
        path: '/'
    });
};

exports.getAddProduct = (req, res, next) => {

    res.render('admin/add-character', {
        docTitle: 'Create Character',
        path: '/add-character'
    });
}

exports.postAddCharacter = (req, res, next) => {

    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const classType = req.body.classType;
    const level = req.body.level;

    const character = new Character(name, imageUrl, classType, level);
    character.save();
    res.redirect('/characters');
};

exports.getCharacters = (req, res, next) => {

    Character.fetchAll(characters => {
        res.render('user/user-characters', {
            chars: characters,
            docTitle: 'Characters',
            path: '/characters'
        })
    });
};