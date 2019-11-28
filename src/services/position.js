const Position = require(`../models/position`);

const PositionService = {
  getAllPositions: function (success, error) {
    Position
      .fetchAll()
      .then(success)
      .catch(error);
  }
};

module.exports = PositionService;