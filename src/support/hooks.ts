// tslint:disable:rule: no-console
import * as p from 'process';
import * as fs from 'fs';
const uniquid = require('uniqid');

import { BeforeAll, After, AfterAll, Status, Before } from 'cucumber';
import { testControllerHolder } from './test-controller-holder';
import { TestControllerConfig } from './test-controller-config';
import environment = require('./../environment');
const exec = require('child_process').execSync;
const createTestCafe = require('testcafe');
import * as screenshot from 'screenshot-desktop';
import { hackathonReporter } from './reporter';
import Util from './tag_util';

let testcafe: { createRunner: () => any; close: () => void; };
let atLeastOneScenarioFailed = false;
const TEST_FILE = 'test.js';
const DELAY = 5 * 1000;
const tagUtilInstance = new Util();

/**
 * The purpose of this temporary test-file is to capture TestCafes' TestController.
 * We basically create and run a dummy test and capture the TestController for future tests.
 */
function createTestFile() {
  fs.writeFileSync(
    TEST_FILE,
    `import { testControllerHolder } from "./src/support/test-controller-holder";
     import { BASE_URL } from './src/environment';
         
    fixture("TestCafe Applitools Challenge").page(BASE_URL)
     test("test", testControllerHolder.capture)`,
  );
}

/* Creates a server instance of TestCafe and starts a test-runner. */
function createServerAndRunTests() {
  let runner: { src: (arg0: string) => { (): any; new(): any; screenshots: { (arg0: string, arg1: boolean): { (): any; new(): any; browsers: { (arg0: string): any; new(): any; }; }; new(): any; }; }; run: (arg0: { pageLoadTimeout: number; skipJsErrors: boolean; skipUncaughtErrors: boolean; speed: number; stopOnFirstFail: boolean; }) => any; };
  createTestCafe('localhost')
    .then((tc: any) => {
      testcafe = tc;
    })
    .then(() => {
      Util.CheckTags(environment.tagValue);
      runner = testcafe.createRunner();
      runner = runner
        .src(`./${TEST_FILE}`)
        .screenshots('reports/screenshots/', false) // we create screenshots manually!
        .browsers(`${environment.BROWSER} ${environment.BROWSER_FLAGS}`.trim());

      return Promise.all([runner.run({
        pageLoadTimeout: 8000,
        skipJsErrors: true,
        skipUncaughtErrors: true,
        speed: 0.7,
        stopOnFirstFail: false,
      })]);
    }).then((err: any) => {
      testcafe.close();
    });
}


/**
 * Runs before all tests start executing.
 * Creates the dummy test file and captures the TestController.
 */
BeforeAll((callback: any) => {
    
  testControllerHolder.register(new TestControllerConfig());
  createTestFile();
  createServerAndRunTests();
  setTimeout(callback, DELAY);
  
});



Before(async function (testCase) {
  const world = this;
  const t: TestController = await world.waitForTestController();
  
})

// Take screenshot if the test case (scenario) has failed
After(async function (testCase) {
  const world = this;
  const t: TestController = await world.waitForTestController();

  if (!environment.APPLITOOLS_FLAG) {
  hackathonReporter(Util.GetTaskNameFromFileName(testCase.sourceLocation.uri), testCase.pickle.name, environment.domId, t.browser.prettyUserAgent, testCase.result.status);
}

  if (testCase.result.status === Status.FAILED) {
    atLeastOneScenarioFailed = true;

    await t
      .takeScreenshot()
      .then((path) => {
        console.log('screenshot taken, see: ', path);
        return world.attachScreenshotToReport(path);
      })
      .catch(async (e) => {
        // Workaround for https://github.com/DevExpress/testcafe/issues/4231
        // tslint:disable-next-line: no-console
        console.log(
          'encountered an error during taking screenshot, retry using another library...',
        );
        await screenshot({ format: 'png' }).then((image: any) => {
          // tslint:disable-next-line: no-console
          console.log('screenshot taken!');
          return world.attachScreenshotInPngFormatToReport(image);
        });
      });
  }
});

const generateHtmlReport = () => {
  if (environment.GENERATE_CUCUMBER_HTML_REPORT) {
    try {
      exec('node cucumber-html.config.js');
    } catch (error) {
      console.error('Could not generate cucumber html report', error);
    }
  }
};

/**
 * The purpose of this file is to notify the ci-build-server that at least one test/scenario failed.
 * The ci-build-server must then let the build fail (not pass).
 */
function createTestFailFile() {
  fs.writeFileSync(`e2e/reports/${environment.TEST_FAIL_FILE}`, '');
}

/**
 * Runs after all tests finished executing, that is:
 * 0. BeforeAll
 *     - execute dummy test ('fixture') and capture TestController
 * 1. Execute feature 1 -> feature n (After)
 * 2. After All
 *     - cleanup (destroy TestController, delete dummy test file)
 *     - generate html report
 *     - exit process
 */
AfterAll( (callback: any) => {
  if (environment.APPLITOOLS_FLAG == true) {
  environment.eyesHolderInstance.waitForTestResults(environment.eyesHolderInstance);}
  

  testControllerHolder.destroy();
  fs.unlinkSync(TEST_FILE);
  setTimeout(callback, DELAY);
  setTimeout(() => {
    generateHtmlReport();
    if (atLeastOneScenarioFailed && environment.TEST_FAIL_FILE) {
      createTestFailFile();
    }

    return p.exit();
  }, DELAY * 4);
});
