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
   
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }); 
