resumeApp.controller(`UploadCtrl`, [
  `$scope`,
  `$routeParams`,
  `PositionsService`,
  function ($scope, $routeParams, PositionsService) {
    const loadDropdownOptions = async function () {
      const dropdown = document.getElementById(`positionSelect`);
      const positions = await PositionsService.getPositions();
      if (positions) {
        if (dropdown) {
          for (let i = 0; i < positions.length; i += 1) {
            dropdown[dropdown.length] = new Option(positions[i], positions[i]);
          }
        }
      }
      else {
        alert(`Failed to load availible positions. Please close your browser and try again`);
      }
    };

    $scope.name = `UploadCtrl`;
    $scope.params = $routeParams;
    loadDropdownOptions();
  }
]);
