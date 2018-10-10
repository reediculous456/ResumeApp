var express = require('express');
var router = express.Router();
var ApplicantService = require('../services/applicantService');
var multer = require('multer')
const upload_path = 'uploads';
//const { body, validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, upload_path)
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + req.body.inputLName + req.body.inputFName + '-' + Date.now() + '.rtf')
  }
});

var upload = multer({ storage: storage });

/* GET users listing. */
router.route('/')
  .get(function (req, res, next) {

    var success = function (collection) {
      res.json(collection.toJSON());
    };

    var error = function (err) {
      res.status(500).json({ error: true, data: { message: err.message } });
    };

    ApplicantService.getAllApplicants(success, error);
  })
  .post(upload.single('resumeFile'), function (req, res) {
    /*body('inputFName', 'Empty First Name').trim().isLength({ min: 1 }),
    body('inputLName', 'Empty Last Name').trim().isLength({ min: 1 }), 
    body('inputEmail', 'Invalid email').isLength({ min: 1 }),
    sanitizeBody('inputFName').trim().escape(),
    sanitizeBody('inputLName').trim().escape(),
    sanitizeBody('imputEmail').trim().escape();
    const errors = validationResult(req);*/

    var success = function () {
      res.redirect('http://0.0.0.0:8000/#!thankyou');
    };

    var error = function (err) {
      res.status(500).json({ error: true, data: { message: err.message } });
    };

    ApplicantService.addApplicant(req.body.inputEmail, req.body.inputFName, req.body.inputLName, req.file.filename, req.body.positionSelect, success, error);
  });
router.route('/:id')
  .delete(function (req, res) {

    var success = function () {
      res.status(200).json({ 'status': 'success' });
    };

    var error = function (err) {
      res.status(500).json({ error: true, data: { message: err.message } });
    };

    ApplicantService.rejectApplicant(req.body.id, success, error);
  });
router.route('/download/:id')
  .get(function (req, res, next) {

    var success = function (applicant) {
      console.log(`${process.env.PWD}/uploads/${applicant.attributes.resumeFile}`);
      res.status(200).download(`${process.env.PWD}/uploads/${applicant.attributes.resumeFile}`);
    };

    var error = function (err) {
      res.status(500).json({ error: true, data: { message: err.message } });
    };

    ApplicantService.getApplicantById(req.params.id, success, error);
  })

module.exports = router;