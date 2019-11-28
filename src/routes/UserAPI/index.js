const router = require(`express`).Router();
const UserService = require(`../../services/user`);
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

exports.router = router;
exports.path = `/api/users`;
