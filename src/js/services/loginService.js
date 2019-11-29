resumeApp.service(`LoginService`, function ($http) {
  this.login = async function (username, password) {
    let retVal;
    await $http({
      method: `POST`,
      url: `http://localhost:3000/login`,
      data: { uName: username, pWord: password },
      headers: {
        'Content-Type': `application/json; charset=utf-8`
      }
    })
      .then(function successCallback() {
        retVal = true;
      }, function errorCallback() {
        retVal = false;
      });
    return retVal;
  };
});
