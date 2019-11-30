resumeApp.service(`SessionService`, [
  `$http`,
  function ($http) {
    this.setToken = function (token) {
      localStorage.setItem(`token`, token);
    };

    this.isValidSession = async function () {
      const token = localStorage.getItem(`token`);
      if (token) {
        await $http({
          method: `PUT`,
          url: `/api/users/verify`,
          data: { token }
        });
      } else {
        throw new Error(`No token provided!`);
      }
    };

    this.destroy = async function () {
      localStorage.removeItem(`token`);
      await $http({
        method: `GET`,
        url: `/logout`
      });
    };
  }
]);