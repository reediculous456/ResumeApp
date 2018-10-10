'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the resumeappApp
 */
angular.module('resumeappApp')
  .controller('UploadCtrl', function ($scope, $routeParams, $http) {

    $scope.name = 'UploadCtrl';
    $scope.params = $routeParams;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/positions'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      var positions = response.data;
      //console.log(positions);
      var dropdown = document.getElementById("positionSelect");

      if (dropdown) {
        for (var i = 0; i < positions.length; i++) {
          //console.log(positions[i]);
          if (positions[i].availible) {
            dropdown[dropdown.length] = new Option(positions[i].position, positions[i].position);
          }
        }
      }
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }); 
