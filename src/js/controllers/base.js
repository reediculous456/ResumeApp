resumeApp.controller(`BaseCtrl`, [
  `$scope`,
  `$location`,
  `$state`,
  `SessionService`,
  function ($scope, $location, $state, SessionService) {
    $scope.$location = $location;

    $scope.secureAccess = () => {
      if (SessionService.isValidSession()) {
        $state.go(`base.applicants`);
      }
      else {
        $state.go(`base.login`);
      }
    };
  }
]);