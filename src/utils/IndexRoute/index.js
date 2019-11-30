const ErrorHandler = require(`../ErrorHandler`);

module.exports = async (req, res) => {
  try {
    res.render(`index`);
  } catch (err) {
    ErrorHandler(res, err.message || err);
  }
};