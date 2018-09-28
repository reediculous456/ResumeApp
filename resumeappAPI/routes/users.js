var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.route('/').get(function (req, res, next) {
  User
   // .where(`username`, `reedws@mail.us.edu`)
    .fetchAll()
    .then(function (collection) {
      res.json(collection.toJSON());
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });

  // res.json({'data':'data'});
});

module.exports = router;
