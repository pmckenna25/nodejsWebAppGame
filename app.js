const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const addData = require('./routes/add-character');
const chars = require('./routes/characters');
const welcome = require('./routes/welcome-page')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', addData.routes);
app.use(chars);
app.use(welcome);

app.listen(8080);