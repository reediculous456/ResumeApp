'use strict';

var bookshelf = require('../bookshelf');

var Applicant = bookshelf.Model.extend({
    tableName: 'applicants',
});

module.exports = Applicant;