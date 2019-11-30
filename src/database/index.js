const knex = require(`./knex`);
const Bookshelf = require(`bookshelf`)(knex);

const Applicant = Bookshelf.Model.extend({
  tableName: `applicants`,
  position() {
    return this.belongsTo(Position);
  }
});

const Position = Bookshelf.Model.extend({
  tableName: `positions`,
  applicants() {
    return this.hasMany(Applicant);
  }
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