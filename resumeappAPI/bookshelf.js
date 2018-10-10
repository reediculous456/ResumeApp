'use strict';

var knex = require('knex')({
    client: 'pg',
    version: '9.6',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'resumeapp',
    }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;