const { Applicant, jsonify } = require(`../database`);

const ApplicantService = {
  getList: () => {
    return Applicant
      .where({ rejected: false })
      .fetchAll({
        withRelated: [ `position` ]
      })
      .then(jsonify);
  },

  getById: (id) => {
    return Applicant
      .where({ id })
      .fetch()
      .then(jsonify);
  },

  add: (applicant) => {
    return Applicant
      .forge()
      .save(applicant)
      .then(jsonify);
  },

  reject: (id) => {
    return Applicant
      .where({ id })
      .save({ rejected: true }, { patch: true })
      .then(jsonify);
  }
};

module.exports = ApplicantService;