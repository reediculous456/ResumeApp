resumeApp.controller(`LoginCtrl`, [
  `$scope`,
  `$state`,
  `LoginService`,
  `SessionService`,
  function ($scope, $state, LoginService, SessionService) {
    $scope.name = `LoginCtrl`;

    $scope.login = async function () {
      const form = document.getElementById(`loginForm`);
      const FD = new FormData(form);

      const result = LoginService.login(FD.get(`uName`), FD.get(`pWord`));

      if (result) {
        SessionService.setUserAuthenticated(true);
        $state.go(`base.applicants`);
      }
      else {
        alert(`Incorrect Username or Password`);
      }
    };
  }
]);
