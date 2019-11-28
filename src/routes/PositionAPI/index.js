const router = require(`express`).Router();
const PositionService = require(`../../services/position`);
const { ResponseHandler, ErrorHandler } = require(`../../utils`);

router.get(`/`, async (req, res) => {
  try {
    const positions = await PositionService.getList();

    ResponseHandler(
      res,
      `Successfully got positions`,
      { positions }
    );
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
});

exports.router = router;
exports.path = `/api/postitions`;
