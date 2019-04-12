const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{

    res.render('welcome-page', {
        docTitle: 'Welcome Page',
        path: '/'
    });
});

module.exports = router;