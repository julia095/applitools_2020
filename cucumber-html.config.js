const reporter = require('cucumber-html-reporter');

const options = {
    jsonFile: 'reports/cucumber_report.json',
    launchReport: false,
    output: 'reports/' + getFileName(),
    reportSuiteAsScenarios: true,
    theme: 'bootstrap'
};

function getCurrentDateTime() {
    const d = new Date(),
        day = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),
        hours = d.getHours(),
        minutes = d.getMinutes(),
        date = [day, month, year].join('-'),
        time = [hours, minutes].join('-');

    return [date, time].join('_');
}

function getFileName() {
    const dateTime = getCurrentDateTime();
    const fileName = 'Regression_test_suite';

    return [dateTime, fileName].join('_') + '.html';
}

reporter.generate(options);

// more info on `metadata` is available in `options` section below.

// to generate consolidated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`.
// More info: https://www.npmjs.com/package/cucumber-html-reporter
