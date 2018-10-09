'use strict';

/**
 * @ngdoc overview
 * @name resumeappApp
 * @description
 * # resumeappApp
 *
 * Main module of the application.
 */
angular
  .module('resumeappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.selection'
  ]).controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  }).config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: '$mainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: '$loginCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl',
        controllerAs: '$uploadCtrl'
      })
      .when('/applicants', {
        templateUrl: 'views/applicants.html',
        controller: 'ApplicantCtrl',
        controllerAs: '$applicantCtrl'
      })
      .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankYouCtrl',
        controllerAs: '$thankyouCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });