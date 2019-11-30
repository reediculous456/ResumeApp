resumeApp.service(`ApplicantsService`, [
  `$http`,
  function ($http) {
    this.addApplicant = function(applicant, file) {
      return $http({
        method: `POST`,
        url: `/api/applicants`,
        headers: {
          'Content-Type': undefined
        },
        data: {
          ...applicant,
          file
        },
        transformRequest: function (data) {
          const formData = new FormData();
          angular.forEach(data, function (value, key) {
            formData.append(key, value);
          });

          return formData;
        }
      });
    };

    this.getApplicants = async function () {
      return await $http({
        method: `GET`,
        url: `/api/applicants`
      }).then(response => {
        return response.data.data.applicants;
      });
    };

    this.rejectApplicant = async function (id) {
      return await $http({
        method: `DELETE`,
        url: `/api/applicants/${id}`,
      })
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
    };
  }
]);
