var gulp = require('gulp'); // import gulp node package
var uglify = require('gulp-uglify'); // get rid of all spaces
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran-gfw');
var responsive = require('gulp-responsive');
 
gulp.task('scripts', function() {
    gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('minjs'));
});

gulp.task('styles', function() {
    console.log('run styles');
});

// Compress images
/*gulp.task('image', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});*/

gulp.task('progressive', function () {
    return gulp.src('img/*.jpg')
        .pipe(jpegtran({ progressive: true })())
        .pipe(gulp.dest('img')); // override original images
});

// compress images
gulp.task('compress', () =>
	gulp.src('public/sites/default/files/upload/users/user1296/*')
        .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{removeViewBox: true}]
        }))
		.pipe(gulp.dest('public/sites/default/files/upload/users/user1296'))
);

// generate images at different sizes
gulp.task('responsive', function () {
    return gulp.src('public/sites/default/files/upload/users/user1296/*')
      .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.jpg': [{
        width: 200,
        rename: { suffix: '-200w' },
      }, {
        width: 461,
        rename: { suffix: '-461w' },
      }, {
        width: 652,
        rename: { suffix: '-652w' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],
      // Resize all PNG images to be retina ready
      '*.png': [{
        width: 250,
      }, {
        width: 250 * 2,
        rename: { suffix: '@2x' },
      }],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist'));
});


//gulp.task('default', ['scripts', 'styles']);