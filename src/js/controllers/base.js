resumeApp.controller(`BaseCtrl`, [
  `$scope`,
  `$location`,
  `$state`,
  `SessionService`,
  function ($scope, $location, $state, SessionService) {
    $scope.$location = $location;
    SessionService.isValidSession()
      .then(() => {
        $scope.auth = true;
      })
      .catch(() => {
        $scope.auth = false;
      });

    $scope.secureAccess = () => {
      SessionService.isValidSession()
        .then(() => {
          $state.go(`base.applicants`);
        })
        .catch(() => {
          localStorage.removeItem(`token`);
          $state.go(`base.login`);
        });
    };
  }
]);