'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeappApp
 */
angular.module('resumeappApp')
  .controller('MainCtrl', [ `$scope`, `$route`,  function ($scope, $route) {

    $scope.title = `ResumeApp`;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]).controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});
