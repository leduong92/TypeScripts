var gulp = require("gulp");
var del = require("del");

var paths = {
    scripts: ["wwwroot/scripts/**/*.js", "wwwroot/scripts/**/*.ts", "wwwroot/scripts/**/*.map"],
};

gulp.task("clean", function () {
    return del(["wwwroot/scripts/**/*"]);
});

gulp.task("default", function () {
    gulp.src(paths.scripts).pipe(gulp.dest("wwwroot/scripts"));
});