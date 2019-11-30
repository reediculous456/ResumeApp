const multer = require(`multer`);
const config = require(`config`);
const path = require(`path`);
const uuidv1 = require(`uuid/v1`);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.get(`uploadPath`));
  },

  filename: function (req, file, cb) {
    cb(null, `${uuidv1()}${path.extname(file.originalname)}`);
  }
});

module.exports = multer({ storage });