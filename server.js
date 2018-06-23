const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var env = require('dotenv').load();
const PORT = process.env.PORT || 3001;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

// For Passport

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//Models
var models = require("./app/models");
const user = require('./controllers/userController.js');

//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.get('/', function (req, res) {

    res.send('Welcome to Easy D&D');

});


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the SQL DB

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});