var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');

var usersRouter = require('./routes/users');
var positionsRouter = require('./routes/positions');
var applicantsRouter = require('./routes/applicants');
var loginRouter = require('./routes/login');

var app = express();

const upload_path = 'uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, upload_path)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + req.body.inputLName + req.body.inputFName + Date.now() + '.rtf')
  }
});
var upload = multer({ storage: storage });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users', usersRouter);
app.use('/positions', positionsRouter);
app.use('/applicants', applicantsRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
