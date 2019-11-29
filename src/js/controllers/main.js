resumeApp.controller(`MainCtrl`, [
  `$scope`,
  `$routeParams`,
  function ($scope, $routeParams) {
    $scope.title = `ResumeApp`;
    $scope.name = `Main`;
    $scope.params = $routeParams;
  }
]);
