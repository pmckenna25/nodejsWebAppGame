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

    Character.create({
        name: name,
        imageUrl: imageUrl,
        classType: classType,
        level: level
    }).then(() =>{
        return res.redirect('/characters');
    })
    .catch(err => console.log(err));
};

exports.getCharacters = (req, res, next) => {

    Character.findAll().then(characters => {
        res.render('user/user-characters', {
            chars: characters,
            docTitle: 'Characters',
            path: '/characters'
        });
    })
    .catch(err => console.log(err));
};