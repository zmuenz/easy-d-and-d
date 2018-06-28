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

// Connect to the SQL DB
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'characters_db',
});

connection.connect();

app.get('/api/characters', (req, res) => {

  //get route for CharacterPae
  connection.query('SELECT * from characters', function (err, rows, fields) {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log('Error while performing Query.');
    }
  });
});

app.post("/api/characters", function(req, res) {
  console.log(req.body);
  db.Character.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function(dbCharacter) {
      res.json(dbCharacter);
    });
});

// app.post('/api/characters', (req, res) => {

//   //post route for NewCharacter
//   connection.query('INSERT INTO characters', function (err, rows, fields) {
//     if (!err) {
//       res.send(JSON.stringify(rows));
//     } else {
//       console.log('Error while performing Query.');
//     }
//   });
// });

// //For BodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(cookieParser());

// // For Passport
// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

// app.use(passport.initialize());

// app.use(passport.session()); // persistent login sessions

// //Models
// var models = require("./models");
// //const user = require('./controllers/userController.js');

// connection.connect(function (err) {
//     if (!err) {
//         console.log("Database is connected ... \n\n");
//     } else {
//         console.log("Error connecting database ... \n\n");
//     }
// });


// //Sync Database
// models.sequelize.sync().then(function () {
//     console.log('Nice! Database looks fine')
// }).catch(function (err) {
//     console.log(err, "Something went wrong with the Database Update!")
// });

// app.get('/', function (req, res) {

//     res.send('Welcome to Easy D&D');

// });

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});