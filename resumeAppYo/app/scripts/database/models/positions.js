'use strict';

var bookshelf = require('../bookshelf');

var Positions = bookshelf.Model.extend({
    tableName: 'positions'
});

module.exports = Positions;