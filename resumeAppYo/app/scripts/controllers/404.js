'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:404Ctrl
 * @description
 * # LoginCtrl
 * Controller of the resumeappApp
 */
angular.module('resumeappApp')
  .controller('404Ctrl', function ($scope, $routeParams) {
    $scope.name = '404Ctrl';
    $scope.params = $routeParams;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });