const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const characterRoutes = require('./routes/characterRoutes');
const welcomeRouter = require('./routes/welcome-page')
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(characterRoutes);
app.use(welcomeRouter);

sequelize.sync().then(result => {

    if(!module.parent){
        app.listen(process.env.PORT || 8080);
    }
})
.catch(err => {
    console.log(err);
});

module.exports = app;
