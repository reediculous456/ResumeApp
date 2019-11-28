const { Position, jsonify } = require(`../database`);

const PositionService = {
  getList: function () {
    Position
      .fetchAll()
      .then(jsonify);
  }
};

module.exports = PositionService;