const express = require('express');
const app = express();
const passport = require('./config/passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv/config');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require("./models");

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session());

const user = require('./controllers/userController.js');


//Sync Database
// db.sequelize.sync({ force: false }).then(function () {
//     app.listen(3306, function () {
//         console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//     })
// })

app.get('/', function (req, res) {
    res.send('Welcome to Easy D&D');
});


app.listen(5001, function (err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});