resumeApp.controller(`UploadCtrl`, [
  `$scope`,
  `PositionsService`,
  `ApplicantsService`,
  `$state`,
  function ($scope, PositionsService, ApplicantsService, $state) {
    $scope.applicant = {
      fName: null,
      lName: null,
      email: null,
      position_id: null
    };

    PositionsService.getPositions()
      .then(positions => {
        $scope.positions = positions;
      });

    $scope.submit = async function() {
      try {
        await ApplicantsService.addApplicant($scope.applicant, $scope.resumeFile);
        $state.go(`base.thankyou`);
      }
      catch (error) {
        alert(`An error occurred!`);
      }
    };

    $scope.name = `UploadCtrl`;
  }
]);
