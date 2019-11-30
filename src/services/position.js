const { Position, jsonify } = require(`../database`);

const PositionService = {
  getList: function () {
    return Position
      .where({ available: true })
      .fetchAll()
      .then(jsonify);
  }
};

module.exports = PositionService;