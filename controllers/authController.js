var db = require("../models"); // May need to specify .js file
var passport = require("passport"); 

// Routes
// =============================================================

module.exports = function(app) {

app.post('/signin', passport.authenticate('local-signin'), function(req, res) {

  console.log("req.user at /signin" + req.user);
  res.json(req.user);

});

app.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    console.log("req.user at /signup" + req.user);
    res.json(req.user);

});

app.get("/loginCheck", function(req, res) {

  if (req.user) {
      console.log("login check server side" + req.user);
      let user = {
          user: req.user
      }
      res.send(user);
  }
})

app.get("/logout", function(req, res) {
  req.logout();
  res.send("user logged out")
})


app.get("/Users/:id", function(req, res) {
  db.User.findOne({
      where: {
          id: req.params.id
      }
  }).then(function(dbUser) {
      console.log(dbUser);
      res.send(dbUser);
  }).catch(err => res.send(err));
})
}