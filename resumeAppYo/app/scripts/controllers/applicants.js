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
    var data = [];

    $scope.gridOptions = {
      columnDefs: [
        { name: 'email' },
        { name: 'first name' },
        { name: 'last name' },
        { name: 'position' },
        { name: 'file' },
        { name: 'id' }
      ]
    };

    $http({
      method: 'GET',
      url: 'http://localhost:3000/applicants'
    }).then(function successCallback(response) {
        $scope.gridOptions.data = response.data;
        console.log($scope.gridOptions.data);
      });

    /*$http({
      method: 'GET',
      url: 'http://localhost:3000/applicants'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
       data = response.data.toJSON(); 
       console.log(data);
      });

      $scope.gridOptions.data = data;*/
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }); 
