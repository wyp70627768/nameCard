var gulp = require('gulp');
var jsFile = ['*.js', 'src/**/*.js'];
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('style', function(){
    return gulp.src(jsFile)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    }

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
})