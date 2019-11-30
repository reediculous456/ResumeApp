resumeApp.service(`LoginService`, [
  `$http`,
  function ($http) {
    this.login = async function (username, password) {
      return await $http({
        method: `POST`,
        url: `/api/login`,
        data: { username, password },
        headers: {
          'Content-Type': `application/json`
        }
      })
        .then(response => {
          return response.data.data.token;
        });
    };
  }
]);
