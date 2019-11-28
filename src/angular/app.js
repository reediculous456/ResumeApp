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
  .module(`resumeappApp`, [
    `ngAnimate`,
    `ngCookies`,
    `ngResource`,
    `ngRoute`,
    `ngSanitize`,
    `ngTouch`,
    `ui.grid`,
    `ui.grid.selection`
  ]).controller(`MainController`, function ($scope, $route, $routeParams, $location, SessionService) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.secureAccess = async function () {

      if (SessionService.getUserAuthenticated()) {
        $location.path(`/applicants`);
      }
      else {
        $location.path(`/login`);
      }
    };
  }).config(function ($routeProvider, $locationProvider) {

    for (const path in routes) {
      $routeProvider.when(path, routes[path]);
    }

    $routeProvider.otherwise({
      redirectTo: `/`,
    });

    $locationProvider.html5Mode(true);
  }).run(function ($rootScope, $location, SessionService) {

    $rootScope.$on(`$locationChangeStart`, function (event, next) {
      for (const i in routes) {
        if (next.indexOf(i) != -1) {
          if (routes[i].requireLogin && !SessionService.getUserAuthenticated()) {
            alert(`You need to be authenticated to see this page!`);
            event.preventDefault();
            $location.path(`/login`);
          }
        }
      }
    });
  });

const routes = {
  '/': {
    templateUrl: `views/main.html`,
    controller: `MainCtrl`,
    controllerAs: `$mainCtrl`,
    requireLogin: false
  },
  '/login': {
    templateUrl: `views/login.html`,
    controller: `LoginCtrl`,
    controllerAs: `$loginCtrl`,
    requireLogin: false
  },
  '/upload': {
    templateUrl: `views/upload.html`,
    controller: `UploadCtrl`,
    controllerAs: `$uploadCtrl`,
    requireLogin: false
  },
  '/applicants': {
    templateUrl: `views/applicants.html`,
    controller: `ApplicantCtrl`,
    controllerAs: `$applicantCtrl`,
    requireLogin: true
  },
  '/thankyou': {
    templateUrl: `views/thankyou.html`,
    controller: `ThankYouCtrl`,
    controllerAs: `$thankyouCtrl`,
    requireLogin: false
  }
};