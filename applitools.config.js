require('dotenv').config();

module.exports = {
    apiKey: process.env.API,
    batchId: '3343423423',
    batchName: 'UFG Hackathon',
    appName: 'AppliFashion',
    concurrency: 10,
    browser: [
        // Add browsers with different viewports
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
    ]
}