# Applitools test automation challenge 2020

TestCafe test suite that uses Cucumber/TestCafe to test “AppliFashion” ecommerce website through the web browser UI, with test fixtures written using TypeScript.
The objective is to test the application across seven (7) different combinations of browsers and screen resolutions.
These tests are written as Gherkin features, in the src/features directory.

## Pre-requisites

- Clone the project
- You also will need to create .env file and add Applitools API key 
- node.js is required, please install node_modules from the root directory

```sh
npm install
```

- Very important note: after all packages are installed, you need to comment the line with accessibilityValidation in eyes.ts file. Find it in applitools/eyes-testcafe package folder
  This is necessary as otherwise the eyes.open() won't work.

```
declare namespace Eyes {
    namespace Testcafe {
      interface OpenOptions extends Omit<Eyes.Open.Options, 'accessibilitySettings'> {
        t: TestController
        //accessibilityValidation: AccessibilitySettings
      }
```

## How to run traditional tests

To run all scenarios for all possible combinations of browsers and viewports, run the following at the command line.

The viewport tag is a compulsory, based on its value testcafe will run appropriate test.

# Note: as per current state the test suite is limited to the 1200x700, 768x700 and 500x700 viewports.
If you don't specify the browser flag, the browser by default is Chrome.

To run the updated version you need to comment the first version code, as Cucumber will try to execute both of them.

```sh
 npm run test -- --env=v1 --tags @1200x700 --browser chrome
 npm run test -- --env=v1 --tags @1200x700 --browser edge
 npm run test -- --env=v1 --tags @1200x700 --browser firefox
 npm run test -- --env=v1 --tags @768x700 --browser chrome
 npm run test -- --env=v1 --tags @768x700 --browser edge
 npm run test -- --env=v1 --tags @768x700 --browser firefox
 npm run test -- --env=v1 --tags @500x700 --browser chrome
 npm run test -- --env=v1 --tags @500x700 --browser edge
 npm run test -- --env=v1 --tags @500x700 --browser firefox
```
## Reports for traditional tests

Reports are done via the manual JS reporter. The results are placed in the /src/test_results directory.
There is also an additional cucumber reporter for a better visual representation of test results.
The cucumber reporter files are placed in /src/reports directory.

## How to run visual tests

All configuration is listed in applitools.config.js file. You need to change this file if you want to run tests for different browsers or viewports.

Use @visual tag and env=v1 to run visual test on the v1 environment
Use @visual2 tag and env=v2 to run visual test on the v1 environment

```sh
 npm run test -- --env=v1 --tags @visual
 ```

## Reports for visual tests

Reports for visual tests can be found in the Applitools Dashboard.

## How to select different environments

To run a test suite for different environments, specify --env variable. --env=v1 or --env=v2.
Config files for environments are placed in /src/config directory
