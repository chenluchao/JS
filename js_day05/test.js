var gulp = require("gulp");
var imagemin = require("gulp-imagemin");


gulp.task("image",function(){
    gulp.js_day05("./js_day05/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});