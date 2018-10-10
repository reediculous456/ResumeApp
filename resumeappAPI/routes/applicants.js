var express = require('express');
var router = express.Router();
var Applicant = require('../models/applicant');
var multer = require('multer')
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
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET users listing. */
router.route('/')
  .get(function (req, res, next) {
    Applicant
      .fetchAll()
      .then(function (collection) {
        res.json(collection.toJSON());
      })
      .catch(function (err) {
        res.status(500).json({ error: true, data: { message: err.message } });
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
    new Applicant({
      email: req.body.inputEmail,
      fName: req.body.inputFName,
      lName: req.body.inputLName,
      resumeFile: req.file.filename,
      position: req.body.positionSelect
    })
      .save(null, { method: 'insert' })
      .then(function (applicant) {
        res.redirect('http://0.0.0.0:8000/#!thankyou');
      })
      .catch(function (err) {
        res.status(500).json({ error: true, data: { message: err.message } });
      });
  });
router.route('/:id')
  .delete(function (req, res) {
    new Applicant({
      id: req.params.id,
      rejected: true
    })
      .save(null, { method: 'update' })
      .then(function (applicant) {
        //res.redirect('http://0.0.0.0:8000/#!applicants')
        res.status(200).json({ 'status': 'success' });
      })
      .catch(function (err) {
        res.status(500).json({ error: true, data: { message: err.message } });
      });
  });
router.route('/download/:id')
  .get(function (req, res, next) {
    Applicant
      .fetchAll()
      .then(function (collection) {
        var applicants = collection.toJSON();
        var file;
        //console.log(req.params.id);
        //console.log(applicants);
        for (var i = 0; i < applicants.length; i++) {
          //console.log(applicants[i].id);
          if (applicants[i].id == req.params.id) {
            //console.log(applicants[i]);
            file = applicants[i].resumeFile;
            break;
          }
        }
        //console.log(`/Users/admin/Desktop/git/resumeApp/resumeappAPI/uploads/${file}`);
        res.status(200).download(`/Users/admin/Desktop/git/resumeApp/resumeappAPI/uploads/${file}`);
      })
      .catch(function (err) {
        res.status(500).json({ error: true, data: { message: err.message } });
      });
  })

module.exports = router;