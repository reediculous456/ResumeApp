const { Applicant } = require(`../databas`);

const ApplicantService = {
  getAllApplicants: function (success, error) {
    Applicant
      .fetchAll()
      .then(success)
      .catch(error);
  },

  getApplicantById: function (id, success, error) {
    new Applicant({ id: id })
      .fetch()
      .then(success)
      .catch(error);
  },

  addApplicant: function (email, fName, lName, file, position, success, error) {
    new Applicant({
      email: email,
      fName: fName,
      lName: lName,
      resumeFile: file,
      position: position
    })
      .save(null, { method: `insert` })
      .then(success)
      .catch(error);
  },

  rejectApplicant: function (id, success, error) {
    new Applicant({
      id: id,
      rejected: true
    })
      .save(null, { method: `update` })
      .then(success)
      .catch(error);
  }
};

module.exports = ApplicantService;