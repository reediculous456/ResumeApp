const router = require(`express`).Router();
const { ErrorHandler } = require(`../../utils`);

router.get(`/*`, async (req, res) => {
  try {
    res.render(`partials/${req.url}`);
  } catch (err) {
    ErrorHandler(res);
  }
});

exports.router = router;
exports.path = `/partial`;
