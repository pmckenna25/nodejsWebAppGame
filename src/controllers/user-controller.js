const Character = require('../models/Character');

exports.getWelcome = (req, res, next) => {

  res.render('user/welcome-page', {
    docTitle: 'Welcome Page',
    path: '/'
  });
};

exports.getAddCharacter = (req, res, next) => {

  res.render('user/add-character', {
    docTitle: 'Create Character',
    path: '/add-character',
    editing: false
  });
}

exports.getEditCharacter = (req, res, next) => {

  const charId = req.params.Id;

  console.log(charId);
  Character.findByPk(charId)
    .then(char => {
      res.render('user/add-character', {
        character: char,
        docTitle: 'Edit Character',
        path: '/add-character',
        editing: true
      });
    })
    .catch(err => console.log(err));
};

exports.postEditCharacter = (req, res, next) => {

  const charId = req.body.charId;
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const classType = req.body.classType;
  const level = req.body.level;

  Character.update({
    name: name,
    imageUrl: imageUrl,
    classType: classType,
    level: level
  }, {
      where: { id: charId }
    }).then(() => {
      return res.redirect('/characters');
    }).catch(err => console.log(err));
};

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
  }).then(() => {
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

exports.getCharacterDetails = (req, res, next) => {

  const charId = req.params.Id;

  Character.findByPk(charId)
    .then(char => {
      res.render('user/character-details', {
        char: char,
        docTitle: char.name,
        path: '/characters'
      });
    })
    .catch(err => console.log(err));
};

exports.deleteCharacter = (req, res, next) => {

  const charId = req.params.Id;
  Character.destroy({ where: { id: charId } })
    .then(() => {
      return res.redirect('/characters');
    })
    .catch(err => console.log(err));
};
