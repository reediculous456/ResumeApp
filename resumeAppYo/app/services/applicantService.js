angular.module('resumeappApp')
    .service('ApplicantsService', function ($http) {
        this.getApplicants = function () {
            var data = [];
            $http({
                method: 'GET',
                url: 'http://localhost:3000/applicants'
            }).then(function successCallback(response) {
                for (var i = 0; i < response.data.length; i++) {
                    if (!response.data[i].rejected) {
                        data.push(response.data[i]);
                    }
                }
            });
            return data;
        }

        this.rejectApplicant = async function (Id) {
            var success;
            await $http({
                method: 'DELETE',
                url: `http://localhost:3000/applicants/${Id}`,
            }).then(function successCallback(response) {
                success = true;
            }, function errorCallback(response) {
                success = false;
            });
            return success;
        }
    });
