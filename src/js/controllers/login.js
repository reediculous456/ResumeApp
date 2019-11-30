resumeApp.controller(`LoginCtrl`, [
  `$scope`,
  `$state`,
  `LoginService`,
  `SessionService`,
  function ($scope, $state, LoginService, SessionService) {
    $scope.name = `LoginCtrl`;

    $scope.login = async function () {
      try {
        const token = await LoginService.login($scope.username, $scope.password);
        SessionService.setToken(token);
        $state.go(`base.applicants`);
      }
      catch {
        alert(`Incorrect Username or Password`);
      }
    };
  }
]);
