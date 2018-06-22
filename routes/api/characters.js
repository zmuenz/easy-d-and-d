// var express = require('express');
// var router = express.Router();
// const charactersController = require("../../controllers/charactersController");

// // // Matches with "/api/books"
// // router.route("/")
// //   .get(booksController.findAll)
// //   .post(booksController.create);

// //get list of characters
// router.get('/', function (req, res, next) {
//     pool.getConnection(function (err, connection) {
//         connection.query("SELECT * FROM characters", function (err, rows) {
//             if (!err && rows.length > 0) {
//                 res.json(rows);
//             } else {
//                 res.json([]);
//             }
//         });
//     });
// });
// //get character by id
// router.get('/:id', function (req, res, next) {
//     pool.getConnection(function (err, connection) {
//         var id = req.params.id;
//         connection.query("SELECT * FROM characters", function (err, rows) {
//             if (!err && rows.length > 0) {
//                 res.json(rows[0]);
//             } else {
//                 res.json([]);
//             }
//         });
//     });
// });

// module.exports = router;

const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// Matches with "/api/books"
router.route("/")
  .get(charactersController.findAll)
  .post(charactersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(charactersController.findById)
  .put(charactersController.update)
  .delete(charactersController.remove);

module.exports = router;
