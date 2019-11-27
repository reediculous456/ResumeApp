angular.module('resumeappApp')
  .service('LoginService', function ($http) {
    this.login = async function (username, password, success, error) {
      var success;
      await $http({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: { uName: username, pWord: password },
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
        .then(function successCallback() {
          success = true;
        }, function errorCallback() {
          success = false;
        });
      return success;
    }
  });
