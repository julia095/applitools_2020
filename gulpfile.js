const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

gulp.task('createReportsFolder', async () => {
    const reportsDir = path.join(__dirname, 'reports');
    if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir);
    }
});