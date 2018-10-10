'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:ApplicantCtrl
 * @description
 * # ApplicantCtrl
 * Controller of the resumeappApp
 */
angular.module('resumeappApp')
  .controller('ApplicantCtrl', function ($scope, $routeParams, $http) {

    $scope.name = 'ApplicantCtrl';
    $scope.params = $routeParams;

    $scope.gridOptions = {
      columnDefs: [
        { name: 'email', cellTemplate: '<a ng-href="mailto:{{row.entity.email}}">{{row.entity.email}}</a>' },
        { name: 'First Name', field: 'fName' },
        { name: 'Last Name', field: 'lName' },
        { name: 'position' },
        { name: 'File', field: 'resumeFile', cellTooltip: '{{row.entity.resumeFile}}', cellTemplate: '<a ng-href="http://localhost:3000/applicants/download/{{row.entity.id}}">{{row.entity.resumeFile}}</a>' },
        { name: 'id', visible: false }
      ],
      paginationPageSizes: [10, 25],
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
        })
      }
    };

    $http({
      method: 'GET',
      url: 'http://localhost:3000/applicants'
    }).then(function successCallback(response) {
      var data = []
      for (var i = 0; i < response.data.length; i++) {
        if (!response.data[i].rejected) {
          data.push(response.data[i]);
        }
      }
      $scope.gridOptions.data = data;
      console.log($scope.gridOptions.data);
    });

    $scope.rejectApplicant = function () {
      $http({
        method: 'DELETE',
        url: `http://localhost:3000/applicants/${$scope.selectedApplicantId}`,
      }).then(function successCallback(response) {
        alert(`Rejected applicant #${$scope.selectedApplicantId}`);
        var index = $scope.gridOptions.data.indexOf($scope.selectedApplicant);
        $scope.gridOptions.data.splice(index, 1);
      });
    }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }); 
