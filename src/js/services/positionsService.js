resumeApp.service(`PositionsService`, [
  `$http`,
  function ($http) {
    this.getPositions = async function () {
      return await $http({
        method: `GET`,
        url: `/api/positions`
      })
        .then(response => {
          return response.data.data.positions;
        })
        .catch(() => {
          return undefined;
        });
    };
  }
]);