var express = require('express');
var router = express.Router();
var PositionService = require('../services/positionService');

/* GET users listing. */
router.route('/').get(function (req, res, next) {

  var success = function (collection) {
    res.json(collection.toJSON());
  };

  var error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  PositionService.getAllPositions(success, error);
});

module.exports = router;
