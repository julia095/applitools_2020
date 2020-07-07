// Given I have window resized to 1200 x 700
import { binding, when, given, then } from 'cucumber-tsflow';
import { testControllerHolder } from '../../support/test-controller-holder';
import { HelperService } from '../../support/helper.service';


@binding()
export class UtilSteps {
    private helper = new HelperService();
    

    @given(/^I have window resized to (\d+) x (\d+)$/)
    public async ResizeWindow(width: number, height: number) {
        const t: TestController = await testControllerHolder.get();
        await t.resizeWindow(width, height);
        console.log('this is current browser:', t.browser.name);
    }
}
