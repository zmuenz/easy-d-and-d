db = require("../models");
var express = require('express');
var authController = require('../controllers/authController')

router = express.Router();
authController(router);

router.get("/api/Character", function (req, res) {
  var query = {};
  db.Character.findAll({}).then(function (dbCharacter) {
    res.json(dbCharacter);
  });
});

// Get route for retrieving a single character
router.get("/usercharacters", function (req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Character
  db.Character.findAll({
    where: {
      userName: req.body.userName
    },
  }).then(function (dbCharacter) {
    res.json(dbCharacter);
  });
});

// Get route for retrieving a single character
router.get("/allcharacters", function (req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Character
  db.Character.findAll({
  }).then(function (dbCharacter) {
    res.json(dbCharacter);
  });
});

//route for saving a new character to the database 
//this needs changed, was fixed, reverted for some reason 
router.post("/api/Character", function (req, res) {
  console.log(req.body);
  var newCharacter = {
    userName: req.body.userName,
    user_id: req.body.userid,
    alignment: req.body.alignment,
    character_name: req.body.character_name,
    alignment: req.body.alignment,
    gender: req.body.gender,
    race: req.body.race,
    class: req.body.class,
    dex: req.body.dex,
    intel: req.body.intel,
    stre: req.body.stre,
    con: req.body.con,
    wis: req.body.wis,
    cha: req.body.cha

  }
  db.Character.create(newCharacter).then(function (dbPost) {
    console.log(dbPost);
    res.json(dbPost);
  });
});

router.delete("/api/Character", function (req, res) {
  console.log(req.body);
  db.Character.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    console.log(dbPost);
    res.json(dbPost);
  });
});


router.post("/signup", function (req, res) {
  console.log(req.body);
  var newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password

  }
  console.log(newUser);
  db.User.create(newUser).then(function (dbPost) {
    console.log(dbPost);
    res.json(dbPost);
  });
});


module.exports = router;


// eventually we expect routes to look different. As of now we are not pushing
// all character data when we post, we edited as such. Eventually we expect: 
// var newCharacter = { 
//   id: req.body.id, 
//   user_id : req.user.id,
//   userName : req.body.user,
//   character_name : req.body.name,
//   gender : req.body.gender,
//   race : req.body.race,
//   class : req.body.class,
//   dex : req.body.dex,
//   intel : req.body.intel,
//   stre : req.body.stre,
//   con : req.body.con,
//   wis : req.body.wis,
//   cha : req.body.cha,
//   acrobatics : req.body.acrobatics,
//   animal_handling : req.body.animal_handling,
//   arcana : req.body.arcana,
//   athletics: req.body.athletics,
//   deception : req.body.deception,
//   history : req.body.history,
//   insight : req.body.insight, 
//   intimidation : req.body.intimidation,
//   investigation : req.body.investigation,
//   medicine : req.body.medicine,
//   nature : req.body.nature,
//   perception : req.body.perception,
//   performance : req.body.performance,
//   persuasion : req.body.persuasion,
//   religion : req.body.religion,
//   sleight : req.body.sleight,
//   stealth : req.body.stealth,
//   survival : req.body.survival
// }