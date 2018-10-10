var express = require('express');
var router = express.Router();
var UserService = require('../services/userService');

/* GET users listing. */
router.route('/').get(function (req, res, next) {
  var success = function (collection) {
    res.json(collection.toJSON());
  };

  var error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  UserService.getAllUsers(success, error);
});

module.exports = router;
