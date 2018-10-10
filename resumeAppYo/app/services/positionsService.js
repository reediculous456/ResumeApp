angular.module('resumeappApp')
    .service('PositionsService', function ($http) {
        this.getPositions = async function () {
            var data = [];
            await $http({
                method: 'GET',
                url: 'http://localhost:3000/positions'
            }).then(function successCallback(response) {
                var positions = response.data;
                for (var i = 0; i < positions.length; i++) {
                    //console.log(positions[i]);
                    if (positions[i].availible) {
                        data.push(positions[i].position);
                    }
                }
            });
            console.log(data);
            return data;
        }
    });