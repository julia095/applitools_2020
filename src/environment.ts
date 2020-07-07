import * as process from 'process';
import { EyesHolder } from './support/applitools';
const argv = require('yargs').argv;



// Import config file based on env variable
const AppConfig = argv.env
    ? require(`./config/config-${argv.env}`)
    : require('./config/config-v1');



// Default Browser
const DEFAULT_BROWSER = 'chrome';
const DEFAULT_CWD = process.cwd();
const DEFAULT_OUTPUT_DIR = `${DEFAULT_CWD}/output`;
// Exported environment variables
export const BASE_URL = AppConfig.baseUrl;
export const BROWSER = argv.browser|| DEFAULT_BROWSER;
export const BROWSER_FLAGS = process.env.BROWSER_FLAGS || '';
export const VIDEO_DIR = `${DEFAULT_OUTPUT_DIR}/videos`;


// Automatically generates the cucumber report
export const GENERATE_CUCUMBER_HTML_REPORT = process.env.GENERATE_HTML_REPORT || true;
export const GENERATE_CUCUMBER_JUNIT_REPORT = process.env.GENERATE_JUNIT_REPORT || true;
export const TEST_FAIL_FILE = process.env.TEST_FAIL_FILE || '';
export const RECORD_VIDEO = process.env.RECORD_VIDEO || false;
export const RECORD_FAILED_ONLY = process.env.RECORD_FAILED_ONLY || false; // "true" does not work with cucumber
export const RECORD_SINGLE_FILE = process.env.RECORD_SINGLE_FILE || false;

// storing command line arguments to use them in hooks and for reporter
export const envVersion = argv.env;
export const tagValue = argv.tags;
export let deviceType = '';
export let viewPort = '';
export let taskName = '';
export let domId = '';
// by default we run traditional tests so we don't need to run specific Applitools code in hook
export let APPLITOOLS_FLAG = false;
export let eyesHolderInstance;