const multer = require(`multer`);
const upload_path = `uploads`;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, upload_path);
  },

  filename: function (req, file, cb) {
    cb(null, `${file.fieldname }-${ req.body.inputLName }${req.body.inputFName }-${ Date.now() }.rtf`);
  }
});

module.exports = multer({ storage });