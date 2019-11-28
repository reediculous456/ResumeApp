module.exports = (res, message, data = {}) => {
  res.status(200);
  res.json({
    status: `SUCCESS`,
    message,
    data
  });
};