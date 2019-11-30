const router = require(`express`).Router();
const UserService = require(`../../services/user`);
const TokenService = require(`../../services/token`);
const { ResponseHandler, ErrorHandler } = require(`../../utils`);

router.get(`/`, async (req, res) => {
  try {
    const users = await UserService.getList();

    ResponseHandler(
      res,
      `Successfully got users`,
      { users }
    );
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
});

router.put(`/verify`, async (req, res) => {
  try {
    await TokenService.decode(req.body.token);

    ResponseHandler(
      res,
      `Valid Token`
    );
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
});

exports.router = router;
exports.path = `/api/users`;
