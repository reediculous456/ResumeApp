const SessionManager = require(`../SessionManager`);
const { TokenService } = require(`../../services/token`);

module.exports = async (req, res) => {
  try {
    const token = await SessionManager.hasValidSession(req);
    const user = await TokenService.decode(token);

    res.render(`index`, {
      user,
      token: req.session.token
    });
  } catch (err) {
    await SessionManager.destroySession(req);

    res.redirect(`/login`);
  }
};