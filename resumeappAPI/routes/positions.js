var express = require('express');
var router = express.Router();
var Position = require('../models/position');

/* GET users listing. */
router.route('/').get(function (req, res, next) {
  Position
    .fetchAll()
    .then(function (collection) {
      res.json(collection.toJSON());
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
});

module.exports = router;
