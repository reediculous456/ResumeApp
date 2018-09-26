'use strict';
var async = require('async');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'password';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash);
    console.log(err);
  });

async function checkUser(username, password) {
    //... fetch user from a db etc.

    const match = await bcrypt.compare(password, user.passwordHash);

    if(match) {
        //login
    }

    //...
}