import { ITestControllerListener } from './test-controller-listener';
import { APPLITOOLS_FLAG, tagValue } from '../environment';
import Util from './tag_util';

// Configures the TestController
export class TestControllerConfig implements ITestControllerListener {
  public async onTestControllerSet(tc: TestController) {
    
    if(!APPLITOOLS_FLAG) {
      await tc.resizeWindow(Util.GetWidthFromTag(tagValue)!, Util.GetHeightFromTag(tagValue)!);
    }
    // Do nothing when Applitools
  }
}
