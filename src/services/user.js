const { User, jsonify } = require(`../database`);
const TokenService = require(`./token`);
const bcrypt = require(`bcrypt`);
const SALT_ROUNDS = 10;

const UserService = {
  getList: () => {
    return User
      .fetchAll()
      .then(jsonify);
  },

  getByUsername: (username) => {
    return User
      .where({ username })
      .fetch()
      .then(jsonify);
  },

  authenticate: async (username, password) => {
    try {
      const user = await UserService.getByUsername(username.toLowerCase());
      const authResult = bcrypt.compareSync(password, user.password);
      if (!authResult) throw new Error();
      delete user.password;
      return TokenService.generate({ user });
    } catch {
      throw new Error(`Invalid Username or Password`);
    }
  },

  create: async (user) => {
    const password = user.password;
    user.password = bcrypt.hashSync(password, SALT_ROUNDS);
    return User
      .forge()
      .save(user)
      .then(jsonify);
  },
};

module.exports = UserService;