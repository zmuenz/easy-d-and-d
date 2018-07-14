const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
var passport = require('passport');
var session = require('express-session');
const cookieParser = require('cookie-parser');
var mysql = require('mysql');
var env = require('dotenv').load();
const PORT = process.env.PORT || 3001;
const router = require('./routes/api-routes.js')
const db = require('./models')

//For cookieParser
app.use(cookieParser());

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the SQL DB
var connection = mysql.createConnection({

    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bcdb82328a4f0a',
    password: 'ca85d2ba',
    database: 'heroku_2c031433a404d72',

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");

require('./config/passport.js')(passport, models.User);

//use router, router defined above 
app.use(router);

//Sync Database with sequelize 
models.sequelize.sync({}).then(function () {
    console.log('Nice! Database looks fine');
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); // serve the static react app
    app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
      res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
    console.log('Serving React App...');
  };

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});