
 db = require("../models");
var express = require('express');

router = express.Router();

router.get("/api/character", function(req, res) {
  var query = {};

  db.Character.findAll(
  
  // ({
  //   where : {
  //     userId : req.user.id
  //   }


  ).then(function(dbCharacter) {
    res.json(dbCharacter);
  });
});


// router.get('/api/characters', (req, res) => {

    //get route for characterpage
  //   connection.query('SELECT * from characters', function (err, rows, fields) {
  //     if (!err) {
  //       res.send(JSON.stringify(rows));
  //     } else {
  //       console.log('Error while performing Query.');
  //     }
  //   });
  // });


//   //get character by id : need to know how to pull the user id of who is currently logged in to provide this.. something from sequelize does this 
// router.get('/:id', function (req, res, next) {
//     var id = req.params.id;
//     connection.query("SELECT * FROM characters WHERE id='" + id + "' LIMIT 1", function (err, rows) {
//       if (!err && rows.length > 0) {
//         res.json(rows[0]);
//       } else {
//         res.json([]);
//       }
//     });
//   });

//   //post character.. does this work with out 'api/characters' anywhere? kg     
//   router.post('/api/characters', function(req, res, next) {
//     pool.getConnection(function(err, connection) {
//       var newCharacter = { 
//          username : req.body.user,
//          character_name : req.body.name,
//          gender : req.body.gender,
//          race : req.body.race,
//          class : req.body.class,
//          str : req.body.str,
//          dex : req.body.dex,
//          con : req.body.con,
//          int : req.body.int,
//          wis : req.body.wis,
//          cha : req.body.cha,
//          acrobatics : req.body.acrobatics,
//          animal : req.body.animal,
//          arcana : req.body.arcana,
//          deception : req.body.deception,
//          history : req.body.history,
//          intimidation : req.body.intimidation,
//          investigation : req.body.investigation,
//          medicine : req.body.medicine,
//          nature : req.body.nature,
//          perception : req.body.perception,
//          performance : req.body.performance,
//          persuasion : req.body.persuasion,
//          religion : req.body.religion,
//          sleight : req.body.sleight,
//          stealth : req.body.stealth,
//          survival : req.body.survival
//       }
//       db.characters.create(newCharacter).then(function(dbPost) {
//         console.log(dbPost);
//         res.json(dbPost);
//       });
//     }
//   });


module.exports = router; 