const gulp = require(`gulp`);
const babel = require(`gulp-babel`);
const cleanCSS = require(`gulp-clean-css`);
const concat = require(`gulp-concat`);
const sass = require(`gulp-sass`);
const uglify = require(`gulp-uglify`);
const image = require(`gulp-image`);

const paths = {
  initjs: `./src/js/init.js`,
  scripts: [
    `./src/js/services/**/*.js`,
    `./src/js/controllers/**/*.js`,
  ],
  css: `./src/resources/scss/**/*.scss`,
  ejs: `./views/**/*.ejs`,
  images: `./src/resources/images/*`,
  fonts: [
    `./node_modules/@fortawesome/fontawesome-free/webfonts/*`,
    `./node_modules/bootstrap/fonts/*`
  ],
  themecss: `./src/resources/theme/grayscale.scss`,
  themejs: `./src/resources/theme/grayscale.js`,
  polyfill: `./node_modules/@babel/polyfill/dist/polyfill.min.js`,
  frontEndStyles: [
    `./node_modules/bootstrap/dist/css/bootstrap.min.css`,
    `./node_modules/@fortawesome/fontawesome-free/css/all.min.css`
  ],
  frontEndLibs: [
    `./node_modules/jquery/dist/jquery.min.js`,
    `./node_modules/angular/angular.min.js`,
    `./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`,
    `./node_modules/angular-animate/angular-animate.min.js`,
    `./node_modules/angular-cookies/angular-cookies.min.js`,
    `./node_modules/angular-resource/angular-resource.min.js`,
    `./node_modules/angular-ui-router/release/angular-ui-router.min.js`,
    `./node_modules/angular-sanitize/angular-sanitize.min.js`,
    `./node_modules/angular-touch/angular-touch.min.js`,
    `./node_modules/angular-ui-grid/ui-grid.min.js`
  ]
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

gulp.task(`themejs`, () => {
  return gulp.src(paths.themejs)
    .pipe(concat(`theme.js`))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(`./public/js`));
});

gulp.task(`themecss`, () => {
  return gulp.src(paths.themecss)
    .pipe(sass().on(`error`, sass.logError))
    .pipe(concat(`theme.css`))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`./public/css`));
});

gulp.task(`alljs`, () => {
  return gulp.src(paths.scripts)
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

gulp.task(`allcss`, () => {
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

gulp.task(`js`, gulp.series(`initjs`, `alljs`, `themejs`));
gulp.task(`css`, gulp.series(`allcss`, `themecss`));

gulp.task(`default`, gulp.series(`fonts`, `js`, `css`, `polyfill`, `frontEndStyles`, `frontEndLibs`, `image`));