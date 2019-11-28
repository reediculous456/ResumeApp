const router = require(`express`).Router();
const UserService = require(`../services/userService`);

router.get(`/`, (req, res) => {
  const success = function (collection) {
    res.json(collection.toJSON());
  };

  const error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  UserService.getAllUsers(success, error);
});

exports.router = router;
exports.path = `/users`;
