const resumeApp = angular
  .module(`resumeApp`, [
    `ngAnimate`,
    `ngCookies`,
    `ngResource`,
    `ngRoute`,
    `ngSanitize`,
    `ngTouch`,
    `ui.grid`,
    `ui.grid.selection`
  ]);

resumeApp.config([
  `$stateProvider`,
  `$urlRouterProvider`,
  `$locationProvider`,
  `$rootScope`,
  `#state`,
  function ($stateProvider, $urlRouterProvider, $locationProvider, $rootScope, $state) {
    $stateProvider
      .state(`home`, {
        url: ``,
        templateUrl: `partial/base.html`,
        controller: `BaseCtrl`,
        abstract: true
      })
      .state(`home`, {
        url: ``,
        templateUrl: `partial/main.html`,
        controller: `MainCtrl`
      })
      .state(`login`, {
        url: `/login`,
        templateUrl: `partial/login.html`,
        controller: `LoginCtrl`
      })
      .state(`upload`, {
        url: `/upload`,
        templateUrl: `partial/upload.html`,
        controller: `UploadCtrl`
      })
      .state(`applicants`, {
        url: `/applicants`,
        templateUrl: `partial/applicants.html`,
        controller: `ApplicantCtrl`,
        resolve: {
          security: [
            `$q`,
            `SessionService`,
            function ($q, SessionService) {
              if (SessionService.isValidSession()) {
                return $q.reject(`Not Authorized`);
              }
            }
          ]
        }
      })
      .state(`thankyou`, {
        url: `/thankyou`,
        templateUrl: `partial/thankyou.html`,
        controller: `ThankYouCtrl`
      });

    $urlRouterProvider.otherwise(`/`);
    $locationProvider.html5Mode({
      enabled: true
    });

    $rootScope.$on(`$stateChangeError`, function(e, toState, toParams, fromState, fromParams, error) {
      if (error === `Not Authorized`) {
        $state.go(`login`);
      }
    });
  }
]);