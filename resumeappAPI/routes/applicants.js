var express = require('express');
var router = express.Router();
var Applicant = require('../models/applicant');
var multer  = require('multer')
const upload_path = 'uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, upload_path)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + req.body.inputLName + req.body.inputFName + '-' + Date.now() + '.rtf')
  }
});
var upload = multer({ storage: storage });
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
  /*body('inputFName', 'Empty First Name').trim().isLength({ min: 1 }),
  body('inputLName', 'Empty Last Name').trim().isLength({ min: 1 }), 
  body('inputEmail', 'Invalid email').isLength({ min: 1 }),
  sanitizeBody('inputFName').trim().escape(),
  sanitizeBody('inputLName').trim().escape(),
  sanitizeBody('imputEmail').trim().escape();
  const errors = validationResult(req);*/
  new Applicant ({ 
    email: req.body.inputEmail,
    fName: req.body.inputFName,
    lName: req.body.inputLName,
    resumeFile: req.file.filename,
    position: req.body.positionSelect
  })
  .save(null, {method: 'insert'})
  .then(function (applicant) {
    res.json({error: false, data: {id: applicant.get('id')}});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  }); 
});

module.exports = router;