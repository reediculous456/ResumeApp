'use strict';

    var knex = require('knex')({  
        client: 'pg',
        version: '9.6',
        connection: {
        host     : 'localhost:5432',
        user     : 'postgres',
        password : 'postgres',
        database : 'resumeapp',
        }
    });
  
    var bookshelf = require('bookshelf')(knex);

    bookshelf.plugin('registry');

    module.exports = bookshelf;