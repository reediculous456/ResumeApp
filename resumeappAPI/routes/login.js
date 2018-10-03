var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../models/user');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET users listing. */
router.route('/')
.post( function (req, res) {
  body('uName', 'Empty First Name').trim().isLength({ min: 1 }),
  body('pWord', 'Empty Last Name').trim().isLength({ min: 1 }), 
  sanitizeBody('uName').trim().escape(),
  sanitizeBody('pWord').trim().escape();
  const errors = validationResult(req);
  console.log('Starting');
  var user = null;

  User
   .where('username', req.body.uName)
   .fetchOne().then(function (found) {
      user = found;
  })
  console.log(user);

    bcrypt.compare(req.body.pWord, user.password).then(function(result) {
      if (result) {
        res.json({'status':'success'});
      }
      else {
        res.json({'error':'Password did not match ' + err, 'username':req.body.uName});
      }
    });
});

module.exports = router;