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

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
