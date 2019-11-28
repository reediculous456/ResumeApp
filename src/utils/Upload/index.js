const multer = require(`multer`);
const config = require(`config`);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.get(`uploadPath`));
  },

  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${req.body.inputLName}${req.body.inputFName}-${Date.now()}.rtf`);
  }
});

module.exports = multer({ storage });