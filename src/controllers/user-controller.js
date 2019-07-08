const Character = require('../models/Character');

exports.getWelcome = (req, res) => {
  res.render('user/welcome-page', {
    docTitle: 'Welcome Page',
    path: '/',
  });
};

exports.getAddCharacter = (req, res) => {
  res.render('user/add-character', {
    docTitle: 'Create Character',
    path: '/add-character',
    editing: false,
  });
};

exports.getEditCharacter = (req, res) => {
  const charId = req.params.Id;

  Character.findByPk(charId)
    .then(char => {
      res.render('user/add-character', {
        character: char,
        docTitle: 'Edit Character',
        path: '/add-character',
        editing: true,
      });
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

exports.postEditCharacter = (req, res) => {
  const { charId } = req.body;
  const { name } = req.body;
  const { imageUrl } = req.body;
  const { classType } = req.body;
  const { level } = req.body;

  Character.update(
    {
      name,
      imageUrl,
      classType,
      level,
    },
    {
      where: { id: charId },
    },
  )
    .then(() => {
      return res.redirect('/characters');
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

exports.postAddCharacter = (req, res) => {
  const { name } = req.body;
  const { imageUrl } = req.body;
  const { classType } = req.body;
  const { level } = req.body;

  Character.create({
    name,
    imageUrl,
    classType,
    level,
  })
    .then(() => {
      return res.redirect('/characters');
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

exports.getCharacters = (req, res) => {
  Character.findAll()
    .then(characters => {
      res.render('user/user-characters', {
        chars: characters,
        docTitle: 'Characters',
        path: '/characters',
      });
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

exports.getCharacterDetails = (req, res) => {
  const charId = req.params.Id;

  Character.findByPk(charId)
    .then(char => {
      res.render('user/character-details', {
        char,
        docTitle: char.name,
        path: '/characters',
      });
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

exports.deleteCharacter = (req, res) => {
  const charId = req.params.Id;
  Character.destroy({ where: { id: charId } })
    .then(() => {
      return res.redirect('/characters');
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};
