var User = require('../models/user');

var UserService = {
  getAllUsers: function (success, error) {
    User
      // .where(`username`, `reedws@mail.us.edu`)
      .fetchAll()
      .then(success)
      .catch(error);
  },

  getUserByUsername: function (username, success, error) {
    new User({ username: username })
      .fetch()
      .then(success)
      .catch(error);
  }
}

module.exports = UserService;