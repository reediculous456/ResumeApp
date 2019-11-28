const router = require(`express`).Router();
const ApplicantService = require(`../services/applicantService`);
const Upload = require(`./upload.js`);

router.get(`/`, (req, res) => {

  const success = function (collection) {
    res.json(collection.toJSON());
  };

  const error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  ApplicantService.getAllApplicants(success, error);
});

router.post(`/`, Upload.single(`resumeFile`), (req, res) => {
  const success = function () {
    res.redirect(`http://0.0.0.0:8000/#!thankyou`);
  };

  const error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  ApplicantService.addApplicant(req.body.inputEmail, req.body.inputFName, req.body.inputLName, req.file.filename, req.body.positionSelect, success, error);
});

router.delete(`/:id`, (req, res) => {

  const success = function () {
    res.status(200).json({ 'status': `success` });
  };

  const error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  ApplicantService.rejectApplicant(req.body.id, success, error);
});

router.get(`/download/:id`, (req, res) => {

  const success = function (applicant) {
    res.status(200).download(`${process.env.PWD}/uploads/${applicant.attributes.resumeFile}`);
  };

  const error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  ApplicantService.getApplicantById(req.params.id, success, error);
});

exports.router = router;
exports.path = `/applicants`;