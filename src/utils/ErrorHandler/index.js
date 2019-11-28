module.exports = (res, errMsg = `Invalid`) => {
  res.status(422);
  res.json({
    status: `ERROR`,
    message: errMsg
  });
};