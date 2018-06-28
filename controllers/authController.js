// var exports = (module.exports = {});
// var db = require("../models");

// exports.signup = function(req, res) {
//   res.render('signup', { title: 'Sign Up | Easy D & D', layout: 'authentication' });
// };

// exports.signin = function(req, res) {
//   res.render('signin', { title: 'Sign In | Easy D & D', layout: 'authentication' });
// };

// exports.logout = function(req, res) {
//   req.session.destroy(function(err) {
//     res.redirect('/');
//   });
// };

// var authController = require('../../controllers/authController.js');
var db = require("../../models");
var passport = require("../config/passport"); // configured passport 


module.exports = function (app, passport) {

  app.get('/signup', authController.signup);


  app.get('/signin', authController.signin);


  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
  }
  ));


  app.get('/dashboard', isLoggedIn, authController.dashboard);


  app.get('/logout', authController.logout);


  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin'
  }
  ));


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/signin');
  }


}
