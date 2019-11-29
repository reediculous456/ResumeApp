resumeApp.controller(`ThankYouCtrl`, [
  `$scope`,
  `$routeParams`,
  function ($scope, $routeParams) {
    $scope.title = `ResumeApp`;
    $scope.name = `ThankYou`;
    $scope.params = $routeParams;
  }
]);
