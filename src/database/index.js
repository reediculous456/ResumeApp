const knex = require(`./knex`);
const Bookshelf = require(`bookshelf`)(knex);

const Applicant = Bookshelf.Model.extend({
  tableName: `applicants`,
});

const Position = Bookshelf.Model.extend({
  tableName: `positions`,
});

const User = Bookshelf.Model.extend({
  tableName: `users`,
});

module.exports = {
  Applicant,
  Position,
  User,
  Bookshelf,
  jsonify: ele => { return ele.toJSON(); }
};