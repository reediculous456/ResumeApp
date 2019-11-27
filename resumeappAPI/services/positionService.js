var Position = require('../models/position');

var PositionService = {
  getAllPositions: function (success, error) {
    Position
      .fetchAll()
      .then(success)
      .catch(error);
  }
}

module.exports = PositionService;