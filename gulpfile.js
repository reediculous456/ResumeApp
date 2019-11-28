const gulp = require(`gulp`);
const babel = require(`gulp-babel`);
const cleanCSS = require(`gulp-clean-css`);
const concat = require(`gulp-concat`);
const sass = require(`gulp-sass`);
const uglify = require(`gulp-uglify`);
const image = require(`gulp-image`);

const paths = {
  scripts: [
    `./src/resources/js/init.js`,
    `./src/resources/js/filters/**/*.js`,
    `./src/resources/js/services/**/*.js`,
    `./src/resources/js/controllers/**/*.js`,
    `./src/resources/js/misc/**/*.js`,
    `./src/resources/js/directives/**/*.js`
  ],
  polyfill: `./node_modules/@babel/polyfill/dist/polyfill.min.js`,
  css: `./src/resources/scss/**/*.scss`,
  ejs: `./views/**/*.ejs`,
  images: `./src/resources/images/*`,
  fonts: [
    `./node_modules/font-awesome/fonts/*`,
    `./node_modules/bootstrap/fonts/*`
  ],
  frontEndStyles: [
    `./node_modules/bootstrap/dist/css/bootstrap.min.css`,
    `./node_modules/font-awesome/css/font-awesome.min.css`,
    `./node_modules/datatables.net-bs/css/dataTables.bootstrap.min.css`,
    `./node_modules/jqueryui/jquery-ui.min.css`,
    `./node_modules/angularjs-toaster/toaster.min.css`,
    `./node_modules/toastr/build/toastr.min.css`
  ],
  frontEndLibs: [
    `./node_modules/angular/angular.min.js`,
    `./node_modules/angular-ui-router/release/angular-ui-router.min.js`,
    `./node_modules/angular-animate/angular-animate.min.js`,
    `./node_modules/angularjs-toaster/toaster.min.js`,
    `./node_modules/jquery/dist/jquery.min.js`,
    `./node_modules/datatables.net/js/jquery.dataTables.min.js`,
    `./node_modules/datatables.net-bs/js/dataTables.bootstrap.min.js`,
    `./node_modules/bootstrap/dist/js/bootstrap.min.js`,
    `./node_modules/ng-file-upload/dist/ng-file-upload-all.min.js`,
    `./node_modules/toastr/build/toastr.min.js`,
    `./node_modules/jquery-validation/dist/jquery.validate.min.js`,
    `./src/resources/js/libs/kaltura.js`
  ],
  alljs: [
    `./src/resources/js/filters/**/*.js`,
    `./src/resources/js/services/**/*.js`,
    `./src/resources/js/controllers/**/*.js`,
    `./src/resources/js/directives/**/*.js`,
    `./src/resources/js/misc/**/*.js`
  ],
  initjs: `./src/resources/js/init.js`,
  loginjs: `./src/resources/js/login.js`
};

gulp.task(`polyfill`, () => {
  return gulp
    .src(paths.polyfill)
    .pipe(gulp.dest(`./public/js`));
});

gulp.task(`initjs`, () => {
  return gulp.src(paths.initjs)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(`./public/js`));
});

gulp.task(`loginjs`, () => {
  return gulp.src(paths.loginjs)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(`./public/js`));
});

gulp.task(`alljs`, () => {
  return gulp.src(paths.alljs)
    .pipe(concat(`scripts.js`))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(`./public/js`));
});

gulp.task(`frontEndStyles`, () => {
  return gulp.src(paths.frontEndStyles)
    .pipe(sass().on(`error`, sass.logError))
    .pipe(concat(`node_combined.css`))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`./public/css`));
});

gulp.task(`image`, function () {
  return gulp.src(paths.images)
    .pipe(image())
    .pipe(gulp.dest(`./public/images`));
});

gulp.task(`frontEndLibs`, () => {
  return gulp.src(paths.frontEndLibs)
    .pipe(concat(`node_combined.js`))
    .pipe(gulp.dest(`./public/js`));
});

gulp.task(`css`, () => {
  return gulp.src(paths.css)
    .pipe(sass().on(`error`, sass.logError))
    .pipe(concat(`style.css`))
    .pipe(gulp.dest(`./public/css`));
});

gulp.task(`ejs`, function() {
  return gulp.src(paths.ejs);
});

gulp.task(`fonts`, function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(`./public/fonts`));
});

// Rerun the task when a file changes
gulp.task(`watch`, () => {
  gulp.watch(paths.scripts, gulp.series(`js`));
  gulp.watch(paths.ejs, gulp.series(`ejs`));
  gulp.watch(paths.css, gulp.series(`css`));
});

gulp.task(`js`, gulp.series(`initjs`, `loginjs`, `alljs`));

gulp.task(`default`, gulp.series(`fonts`, `js`, `css`, `polyfill`, `frontEndStyles`, `frontEndLibs`, `image`));