const router = require(`express`).Router();
const PositionService = require(`../services/positionService`);

router.get(`/`, (req, res) => {

  const success = function (collection) {
    res.json(collection.toJSON());
  };

  const error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  PositionService.getAllPositions(success, error);
});

exports.router = router;
exports.path = `/postitions`;
