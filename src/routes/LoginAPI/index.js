const router = require(`express`).Router();
const UserService = require(`../../services/user`);
const { ErrorHandler, ResponseHandler, SessionManager } = require(`../../utils`);

router.post(`/`, async(req, res) =>{
  try {
    const token = await UserService.authenticate(req.body.username, req.body.password);
    delete req.body.username;
    delete req.body.password;
    await SessionManager.setSession(req, token);

    ResponseHandler(
      res,
      `login successful`,
      { token }
    );
  } catch (err) {
    ErrorHandler(res, err);
  }
});

exports.router = router;
exports.path = `/api/login`;