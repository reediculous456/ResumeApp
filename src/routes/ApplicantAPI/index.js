const router = require(`express`).Router();
const ApplicantService = require(`../../services/applicant`);
const { ResponseHandler, ErrorHandler, Upload } = require(`../../utils`);

router.get(`/`, async (req, res) => {
  try {
    const applicants = await ApplicantService.getList();

    ResponseHandler(
      res,
      `Successfully got applicants`,
      { applicants }
    );
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
});

router.post(`/`, Upload.single(`file`), async (req, res) => {
  try {
    const { email, fName, lName, position_id } = req.body;
    const newApplicant = {
      email,
      fName,
      lName,
      resumeFile: req.file.filename,
      position_id
    };
    const applicant = await ApplicantService.add(newApplicant);

    ResponseHandler(
      res,
      `Successfully created applicant`,
      { applicant }
    );
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
});

router.delete(`/:id`, async (req, res) => {
  try {
    const applicant = await ApplicantService.reject(req.params.id);

    ResponseHandler(
      res,
      `Successfully rejected applicant`,
      { applicant }
    );
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
});

router.get(`/download/:id`, async (req, res) => {
  try {
    const applicant = await ApplicantService.getById(req.params.id);

    res.status(200).download(`${process.env.PWD}/uploads/${applicant.attributes.resumeFile}`);
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
});

exports.router = router;
exports.path = `/api/applicants`;