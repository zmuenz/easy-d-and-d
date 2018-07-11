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

// Connect to the SQL DB
var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'Magicman1684',
    database: 'characters_db',

});

connection.connect();

//For cookieParser
app.use(cookieParser());

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});