import fs = require('fs');
import environment = require('./../environment');

export function hackathonReporter(task: string, testName: string, domId: string, browserName: string, comparisonResult: string) {
    try {
    fs.appendFileSync(`./src/test_results/Traditional-${environment.envVersion}-TestResults.txt`, `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browserName}, Viewport: ${environment.viewPort}, Device: ${environment.deviceType}, Status: ${(comparisonResult)}\n`)}
    catch(err) {
        throw new Error(`There was an ${err} error while creating a report file`);
    };

}
