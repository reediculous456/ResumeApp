'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the resumeappApp
 */
angular.module('resumeappApp')
  .controller('LoginCtrl', function ($scope, $routeParams) {
    $scope.name = 'LoginCtrl';
    $scope.params = $routeParams;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });