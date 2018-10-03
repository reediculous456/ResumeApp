'use strict';

var bcrypt = require('bcrypt');
const saltRounds = 10;
/*const myPlaintextPassword = 'password';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash);
    console.log(err);
  });*/

module.exports = 
{ checkUser: function (username, password) 
    {
        var users = [];
        $http({
            method: 'GET',
            url: '/users'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                users = response.data; 
                console.log(users); 
            });
            var hash = "";
            for (var i = 0; i < users.length; i++){
                if (users[i].username === username) {
                    hash = users[i].password;
                    console.log('name ' + users[i].username + ' pword ' + users[i].password);
                    break;
                }
            }
            const match = bcrypt.compare(password, hash);
            console.log(match);
            return match;
    },
};