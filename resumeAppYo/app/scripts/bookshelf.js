'use strict'

angular
  .module('resumeappApp')
  .controller('database', function ($scope){
    var knex = require('knex')({  
        client: 'pg',
        version: '9.6',
        connection: {
        host     : 'localhost',
        user     : 'postgres',
        password : 'postgres',
        database : 'resumeapp',
        }
    });
  
    var bookshelf = require('bookshelf')(knex);

    var User = bookshelf.Model.extend({
        tableName: 'users',
    });

    var Applicant = bookshelf.Model.extend({
        tableName: 'applicants',
    });

    var Positions = bookshelf.Model.extend({
        tableName: 'positions'
    })
});