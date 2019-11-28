angular.module(`resumeappApp`)
  .service(`SessionService`, function () {
    let userIsAuthenticated = false;

    this.setUserAuthenticated = function (value) {
      userIsAuthenticated = value;
    };

    this.getUserAuthenticated = function () {
      return userIsAuthenticated;
    };
  });