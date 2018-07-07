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

app.get("/logincheck", function(req, res) {

  if (req.user) {
      console.log("login check server side" + req.user);
      let userObj = {
          user: req.user
      }
      res.send(userObj);
  }
})

app.get("/logout", function(req, res) {
  req.logout();
  res.send("user logged out")
})
//
// POST route for saving a new User
// app.post("/signup", function(req, res) {

//   console.log("User Data:");
//   console.log(req.body);
//   // create takes an argument of an object describing the item we want to
//   // insert into our table. (req.body)
//   db.User.create({
//           firstName: req.body.firstName,
//           lastName: req.body.lastName,
//           userName: req.body.userName,
//           email: req.body.email,
//           password: req.body.password

//       }).then(function(dbUser) {
//           // We have access to the new todo as an argument inside of the callback function
//           res.json(dbUser);
//       })
//       .catch(function(err) {
//           // Whenever a validation or flag fails, an error is thrown
//           // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//           res.json(err);
//       });
// });


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