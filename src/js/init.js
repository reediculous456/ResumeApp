const resumeApp = angular
  .module(`resumeApp`, [
    `ngAnimate`,
    `ngCookies`,
    `ngResource`,
    `ui.router`,
    `ngSanitize`,
    `ngTouch`,
    `ui.grid`,
    `ui.grid.selection`
  ]);

resumeApp.config([
  `$stateProvider`,
  `$urlRouterProvider`,
  `$locationProvider`,
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state(`base`, {
        url: ``,
        templateUrl: `partial/base`,
        controller: `BaseCtrl`,
        abstract: true
      })
      .state(`base.home`, {
        url: `/home`,
        templateUrl: `partial/main`,
        controller: `MainCtrl`
      })
      .state(`base.login`, {
        url: `/login`,
        templateUrl: `partial/login`,
        controller: `LoginCtrl`
      })
      .state(`base.upload`, {
        url: `/upload`,
        templateUrl: `partial/upload`,
        controller: `UploadCtrl`
      })
      .state(`base.applicants`, {
        url: `/applicants`,
        templateUrl: `partial/applicants`,
        controller: `ApplicantCtrl`
      })
      .state(`base.thankyou`, {
        url: `/thankyou`,
        templateUrl: `partial/thankyou`,
        controller: `ThankYouCtrl`
      });

    $urlRouterProvider.otherwise(`/home`);
    $locationProvider.html5Mode({
      enabled: true
    });
  }
])
  .run([
    `$transitions`,
    `SessionService`,
    function($transitions, SessionService) {
      $transitions.onStart({ to: `base.applicants` }, function(trans) {
        if (!SessionService.isValidSession()) {
          return trans.router.stateService.target(`base.login`);
        }
      });
    }
  ]);