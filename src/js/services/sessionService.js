resumeApp.service(`SessionService`, function () {
  let userIsAuthenticated = false;

  this.setUserAuthenticated = function (value) {
    userIsAuthenticated = value;
  };

  this.isValidSession = function () {
    return userIsAuthenticated;
  };
});