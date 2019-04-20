const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const addRouter = require('./routes/add-character');
const charsRouter = require('./routes/characters');
const welcomeRouter = require('./routes/welcome-page')
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(addRouter);
app.use(charsRouter);
app.use(welcomeRouter);

sequelize.sync().then(result => {

    app.listen(8080);
})
.catch(err => {
    console.log(err);
})
