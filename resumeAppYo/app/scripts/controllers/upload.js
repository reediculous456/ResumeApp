'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the resumeappApp
 */
angular.module('resumeappApp')
  .controller('UploadCtrl', function ($scope, $routeParams) {

    $scope.name = 'UploadCtrl';
    $scope.params = $routeParams;
    var positions = ['temp1', 'temp2', 'spoigneoqignpqoin'];

    var dropdown = document.getElementById("positionSelect");
    if(dropdown) {
      for (var i = 0; i < positions.length; i++) {
        dropdown[dropdown.length] = new Option(positions[i], positions[i]);
      }
    }

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
