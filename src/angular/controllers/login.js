'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the resumeappApp
 */
angular.module(`resumeappApp`)
  .controller(`LoginCtrl`, function ($scope, $location, $routeParams, LoginService, SessionService) {
    $scope.name = `LoginCtrl`;
    $scope.params = $routeParams;

    $scope.login = async function () {
      const form = document.getElementById(`loginForm`);
      const FD = new FormData(form);

      const result = LoginService.login(FD.get(`uName`), FD.get(`pWord`));

      if (result) {
        SessionService.setUserAuthenticated(true);
        $location.path(`/applicants`);
      }
      else {
        alert(`Incorrect Username or Password`);
      }
    };

    this.awesomeThings = [
      `HTML5 Boilerplate`,
      `AngularJS`,
      `Karma`
    ];
  });
