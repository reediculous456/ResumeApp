resumeApp.service(`ApplicantsService`, [
  `$http`,
  function ($http) {
    this.getApplicants = async function () {
      let data = [];
      await $http({
        method: `GET`,
        url: `http://localhost:3000/applicants`
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

    this.rejectApplicant = async function (Id) {
      let success;
      await $http({
        method: `DELETE`,
        url: `http://localhost:3000/applicants/${Id}`,
      }).then(function successCallback() {
        success = true;
      }, function errorCallback() {
        success = false;
      });
      return success;
    };
  }
]);
