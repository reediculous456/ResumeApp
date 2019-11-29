const router = require(`express`).Router();
const { SessionManager, IndexRoute } = require(`../../utils`);

router.get(`/`, IndexRoute);

router.get(`/logout`, (req, res) => {
  SessionManager
    .destroySession(req)
    .then(() => {
      res.redirect(`/`);
    });
});

exports.router = router;
exports.path = `/`;
