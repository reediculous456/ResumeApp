const router = require(`express`).Router();
const bcrypt = require(`bcrypt`);
const UserService = require(`../services/userService`);

router.post(`/`, (req, res) => {
  const success = function (user) {
    bcrypt.compare(req.body.pWord, user.attributes.password).then(function (result) {
      if (result) {
        res.status(200).json({ 'status': `success` });
      }
      else {
        res.json({ 'error': `Password did not match `, 'username': req.body.uName });
      }
    });
  };

  const error = function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  };

  UserService.getUserByUsername(req.body.uName, success, error);
});

exports.router = router;
exports.path = `/login`;