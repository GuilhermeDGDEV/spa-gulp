const gulp = require('gulp');

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor');

module.exports.default = gulp.series(
    appHTML,
    appCSS, 
    appJS, 
    appIMG,
    servidor,
    monitorarArquivos
);
