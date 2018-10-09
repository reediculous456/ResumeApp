'use strict';

/**
 * @ngdoc function
 * @name resumeappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeappApp
 */
angular.module('resumeappApp')
  .controller('ThankYouCtrl', function($scope, $routeParams) {

    $scope.title = `ResumeApp`;
    $scope.name = 'ThankYou';
    $scope.params = $routeParams;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
