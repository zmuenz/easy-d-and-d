var exports = (module.exports = {});
var db = require("../models");

exports.signup = function(req, res) {
  res.render('signup', { title: 'Sign Up | Easy D & D', layout: 'authentication' });
};

exports.signin = function(req, res) {
  res.render('signin', { title: 'Sign In | Easy D & D', layout: 'authentication' });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};
