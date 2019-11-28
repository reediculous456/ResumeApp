'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:ApplicantCtrl
 * @description
 * # ApplicantCtrl
 * Controller of the resumeappApp
 */
angular.module(`resumeappApp`)
  .controller(`ApplicantCtrl`, function ($scope, $routeParams, $location, ApplicantsService, SessionService) {

    $scope.name = `ApplicantCtrl`;
    $scope.params = $routeParams;

    $scope.gridOptions = {
      columnDefs: [
        { name: `email`, cellTemplate: `<a ng-href="mailto:{{row.entity.email}}">{{row.entity.email}}</a>` },
        { name: `First Name`, field: `fName` },
        { name: `Last Name`, field: `lName` },
        { name: `position` },
        { name: `File`, field: `resumeFile`, cellTooltip: `{{row.entity.resumeFile}}`, cellTemplate: `<a ng-href="http://localhost:3000/applicants/download/{{row.entity.id}}">{{row.entity.resumeFile}}</a>` },
        { name: `id`, visible: false }
      ],
      paginationPageSizes: [ 10, 25 ],
      paginationPageSize: 25,
      enablePagination: true,
      enablePaginationControls: true,
      multiSelect: false,
      enableSelectAll: false,
      enableFiltering: true,
      enableRowHeaderSelection: false,
      rowHeight: 50,
      onRegisterApi: function (gridApi) {
        $scope.gridApi = gridApi;
        $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
        gridApi.selection.on.rowSelectionChanged($scope, function (row) {
          $scope.selectedApplicantId = row.entity.id;
          $scope.selectedApplicant = row.entity;
        });
      }
    };

    $scope.rejectApplicant = async function () {
      const result = await ApplicantsService.rejectApplicant($scope.selectedApplicantId);

      if (result) {
        alert(`Rejected applicant #${$scope.selectedApplicantId}`);
        const index = $scope.gridOptions.data.indexOf($scope.selectedApplicant);
        $scope.gridOptions.data.splice(index, 1);
      }
      else {
        alert(`An error ocurred, please try again`);
      }
    };

    $scope.logout = function () {
      SessionService.setUserAuthenticated(false);
      $location.path(`/`);
    };

    const init = async function () {
      const applicants = await ApplicantsService.getApplicants();
      if (applicants) {
        $scope.gridOptions.data = applicants;
      }
      else {
        alert(`Failed to load applicants, please check connection to server`);
      }
    };

    init();

    this.awesomeThings = [
      `HTML5 Boilerplate`,
      `AngularJS`,
      `Karma`
    ];
  });
