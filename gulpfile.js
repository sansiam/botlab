const
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    nodemon({
        script: "app.js",
        ext: "js",
        ignore: ['./node_modules/**']
    })
    .on('restart', function() {
        console.log("Chatbot restarting...");
    });
});