/**
 * Created by dpavao on 4/28/15.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});


var tsProject = $.typescript.createProject({
    declarationFiles: true,
    noExternalResolve: true,
    typescript: require('typescript'),
    sourceRoot: '/app/',
    target: 'ES6'
});



gulp.task('typescript', function () {
    var tsResult = gulp.src('app/ts/**/*.ts')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.typescript(tsProject));

    return tsResult.js
        .pipe($.sourcemaps.write('./', {
            debug: true,
            includeContent: false,
            sourceMappingURLPrefix: '.'
        }))
        .pipe(gulp.dest('app/js'));
});

gulp.task('typescript-watcher', function () {
    return $.watch('app/ts/**/*.ts', function () {
        gulp.start('typescript');
    });
});

gulp.task('watch', [
    'typescript-watcher',
]);

gulp.task('dev', [
    'typescript',
    'watch'
]);