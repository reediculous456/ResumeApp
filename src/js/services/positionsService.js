resumeApp.service(`PositionsService`, [
  `$http`,
  function ($http) {
    this.getPositions = async function () {
      let data = [];
      await $http({
        method: `GET`,
        url: `http://localhost:3000/positions`
      }).then(function successCallback(response) {
        const positions = response.data;
        for (let i = 0; i < positions.length; i += 1) {
        //console.log(positions[i]);
          if (positions[i].availible) {
            data.push(positions[i].position);
          }
        }
      }, function errorCallback() {
        data = undefined;
      });
      return data;
    };
  }
]);