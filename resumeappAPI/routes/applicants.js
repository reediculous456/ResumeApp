var express = require('express');
var router = express.Router();
var Applicant = require('../models/applicant');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET users listing. */
router.route('/').get(function (req, res, next) {
  Applicant
    .fetchAll()
    .then(function (collection) {
      res.json(collection.toJSON());
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
})
.post(upload.single('resumeFile'), function (req, res) {
  body('inputFName', 'Empty First Name').trim().isLength({ min: 1 }),
  body('inputLName', 'Empty Last Name').trim().isLength({ min: 1 }), 
  body('inputEmail', 'Invalid email').isLength({ min: 1 }),
  sanitizeBody('inputFName').trim().escape(),
  sanitizeBody('inputLName').trim().escape(),
  sanitizeBody('imputEmail').trim().escape();
  const errors = validationResult(req);
  /*new Applicant ({ 
    email: req.body.inputEmail,
    fName: req.body.inputFName,
    lname: req.body.inputLName,
    resumeFile: req.body.resumeFile,
    position: req.body.positionSelect
  })
  .save(null, {method: 'insert'})
  .then(function (applicant) {
    res.json({error: false, data: {email: applicant.get('id')}});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  }); */
  console.log('email: ' + req.body.inputEmail +
    ' fName: ' + req.body.inputFName +
    ' lname: ' + req.body.inputLName +
    ' resumeFile: ' + req.body.resumeFile +
    ' position: ' + req.body.positionSelect);
    res.json({error: false});

});

module.exports = router;