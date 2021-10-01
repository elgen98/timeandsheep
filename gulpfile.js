var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("compile", function () {
  return gulp.src("SCSS/main.scss").pipe(sass()).pipe(gulp.dest("CSS"));
});

gulp.task("watch-scss", function () {
  gulp.watch("SCSS/main.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});
