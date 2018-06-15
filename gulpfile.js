var gulp = require('gulp'); // import gulp node package
var uglify = require('gulp-uglify'); // get rid of all spaces
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran-gfw');
var imageminOptipng = require('imagemin-optipng');
var imageminGifsicle = require('imagemin-gifsicle');
var imageminSvgo = require('imagemin-svgo');
/*var minifyjs = require('gulp-js-minify');
var svgmin = require('gulp-svgmin');
var htmlmin = require('gulp-htmlmin');
*/var purify = require('gulp-purifycss');
var cleanCSS = require('gulp-clean-css');
var webp = require('gulp-webp');
var responsive = require('gulp-responsive');
var cssbeautify = require('gulp-cssbeautify');
 
var workboxBuild = require('workbox-build');
gulp.task('service-worker', () => {
  return workboxBuild.generateSW({
    globDirectory: 'public',
    globPatterns: [
      '**\/*.{html,json,js,css,jpg,png,jpeg,svg,gif,mp4,ico,woff,tff}',
    ],
    swDest: 'build/sw.js',
  });
});

gulp.task('service-worker-mp4', () => {
  return workboxBuild.generateSW({
    globDirectory: 'public',
    globPatterns: [
      'sites/default/files/*.mp4',
    ],
    swDest: 'build/sw.js',
  });
});

gulp.task('beautifycss', function() {
    return gulp.src('public/_resources/css/styles.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('beautify'));
});

var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
gulp.task('minifycss', function () {
    gulp.src('styles.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

const stripCssComments = require('gulp-strip-css-comments');
gulp.task('strip-comments', () =>
    gulp.src('unpurified_styles.css')
        .pipe(stripCssComments())
        .pipe(gulp.dest('dist'))
);

var stripjs = require('gulp-strip-comments');
gulp.task('stripjs', function () {
  return gulp.src('public/_resources/js/myscripts.js')
    .pipe(stripjs())
    .pipe(gulp.dest('dist'));
});

 /*
gulp.task('scripts', function() {
    gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('minjs'));
});
*/

const minify = require('gulp-minify');
gulp.task('minifyjs', function() {
  gulp.src('myscripts.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});


gulp.task('styles', function() {
    console.log('run styles');
});
/*
gulp.task('minifyhtml', function() {
  return gulp.src('public/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// compress svg
gulp.task('svg', function () {
  return gulp.src('public/sites/all/themes/ucd_one/images/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest('public/sites/all/themes/ucd_one/images'));
}); */

// Compress images
gulp.task('image', function() {
    gulp.src('public/_resources/img/academics/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(gulp.dest('public/_resources/img/academicsg'));
});

// convert jpg to webp
gulp.task('webp', () =>
    gulp.src('public/_resources/img/placeholder_ig-50w.jpg')
        .pipe(webp())
        .pipe(gulp.dest('webp'))
);

/*
gulp.task('progressive', function () {
    return gulp.src('img/*.jpg')
        .pipe(jpegtran({ progressive: true })())
        .pipe(gulp.dest('img')); // override original images
});

gulp.task('minify-js', function(){
  gulp.src('public/sites/default/files/js/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('public/sites/default/files/js'));
});


// compress images
gulp.task('compress', () =>
	gulp.src('public/sites/all/themes/ucd_one/images/icons/*.svg')
        .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{removeViewBox: true}]
        }))
		.pipe(gulp.dest('public/sites/all/themes/ucd_one/images/icons'))
);

gulp.task('css', function() {
  return gulp.src('public/sites/default/files/css/*.css')
    .pipe(purify(['public/sites/default/files/js/*.js', 'index.html']))
    .pipe(gulp.dest('purifiedcss'));
});

var checkCSS = require( 'gulp-check-unused-css' );
gulp.task('checkcss', function() { 
return gulp
    .src([ 'public/sites/default/files/css/*.css', '*.html' ])
    .pipe( checkCSS() );
});
*/
gulp.task('purifycss', function() {
  return gulp.src('public/_resources/css/styles.css')
    .pipe(purify(['public/_resources/js/*.js', 'index.html']))
    .pipe(gulp.dest('purified'));
});

gulp.task('minify-css', () => {
  return gulp.src('public/_resources/css/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('minifiedcss'));
});

/*
var uncss = require('gulp-uncss');
gulp.task('ridcss', function () {
    return gulp.src('public/sites/default/files/css/*.css')
        .pipe(uncss({
            html: ['public/index.html']
        }))
        .pipe(gulp.dest('uncss'));
});

*/
// generate images at different sizes
gulp.task('responsive', function () {
    return gulp.src('public/_resources/img/logo_UCSD_white.png')
      .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 400, and 500 pixels
      '*.jpg': [{
        width: 50,
        rename: { suffix: '-50w' },
      }, {
        width: 400,
        rename: { suffix: '-400w' },
      }, {
        width: 500,
        rename: { suffix: '-500w' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],

      '*.webp': [{
        width: 50,
        rename: { suffix: '-50w' },
      }, {
        width: 400,
        rename: { suffix: '-400w' },
      }, {
        width: 500,
        rename: { suffix: '-500w' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],

      '*.png': [{
        width: 50,
        rename: { suffix: '-50w' },
      }, {
        width: 400,
        rename: { suffix: '-400w' },
      }, {
        width: 500,
        rename: { suffix: '-500w' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }], 

     /* // Resize all PNG images to be retina ready
      '*.png': [{
        width: 250,
      }, {
        width: 250 * 2,
        rename: { suffix: '@2x' },
      }],*/
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('temp'));
});

// generate images at different sizes
gulp.task('responsiveJPG', function () {
  return gulp.src('public/_images/about/*.jpg')
    .pipe(responsive({
    // Resize all JPG images to three different sizes: 200, 400, and 500 pixels
    '*.jpg': [/*{
      width: 200,
      rename: { suffix: '-200w' },
    }, {
      width: 400,
      rename: { suffix: '-400w' },
    }, {
      width: 500,
      rename: { suffix: '-500w' },
    },*/ {
      width: 75,
      rename: { suffix: '-tiny' },
    }, {
      // Compress, strip metadata, and rename original image
      rename: { suffix: '-original' },
    }],
   /* // Resize all PNG images to be retina ready
    '*.png': [{
      width: 250,
    }, {
      width: 250 * 2,
      rename: { suffix: '@2x' },
    }],*/
  }, {
    // Global configuration for all images
    // The output quality for JPEG, WebP and TIFF output formats
    quality: 70,
    // Use progressive (interlace) scan for JPEG and PNG output
    progressive: true,
    // Strip all metadata
    withMetadata: false,
    errorOnEnlargement: false,
  }))
  .pipe(gulp.dest('temp'));
});


//gulp.task('default', ['scripts', 'styles']);