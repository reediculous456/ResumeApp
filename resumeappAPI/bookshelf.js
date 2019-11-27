'use strict';

var knex = require('knex')({
  client: 'pg',
  version: '12.0',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'resumeapp',
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;