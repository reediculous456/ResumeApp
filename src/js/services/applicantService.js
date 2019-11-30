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
      let data = [];
      await $http({
        method: `GET`,
        url: `/api/applicants`
      }).then(function successCallback(response) {
        for (let i = 0; i < response.data.length; i += 1) {
          if (!response.data[i].rejected) {
            data.push(response.data[i]);
          }
        }
      }, function errorCallback() {
        data = undefined;
      });
      return data;
    };

    this.rejectApplicant = async function (id) {
      let success;
      await $http({
        method: `DELETE`,
        url: `/api/applicants/${id}`,
      }).then(function successCallback() {
        success = true;
      }, function errorCallback() {
        success = false;
      });
      return success;
    };
  }
]);
