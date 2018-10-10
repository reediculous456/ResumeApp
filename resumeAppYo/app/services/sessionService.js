angular.module('resumeappApp')
    .service('SessionService', function () {
        var userIsAuthenticated = false;

        this.setUserAuthenticated = function (value) {
            userIsAuthenticated = value;
        };

        this.getUserAuthenticated = function () {
            return userIsAuthenticated;
        };
    });