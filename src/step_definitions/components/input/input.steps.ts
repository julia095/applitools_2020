import { binding, when, given, then } from 'cucumber-tsflow';
import { testControllerHolder } from '../../../support/test-controller-holder';
import { HelperService } from '../../../support/helper.service';
import environment = require('./../../../environment');

@binding()
export class InputSteps {
    private helper = new HelperService();
    

    @when(/^I enter (.*) into the field with id (.*)$/)
    public async EnterTextWithId(text: string, id: string) {
        const t: TestController = await testControllerHolder.get();
        await t.selectText(await this.helper.GetElementById(t, id)).pressKey('delete');
        await t.typeText(await this.helper.GetElementById(t, id), text);
    }

    @then(/^I see the search bar with id (.*) contains (.*)$/)
    public async DoesSearchBarContainsText(id: string, text: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        const searchBar = await this.helper.GetElementById(t, id);
        await t.expect(searchBar.getAttribute('placeholder')).eql(text);
    }

    // @given(/^I select the checkbox with id (.*)$/)
    // public async ClickCheckboxWithId(id: string) {
    //     const t: TestController = await testControllerHolder.get();
    //     const checkBox: Selector = await this.helper.GetElementById(t, id);
    //     if (await this.helper.GetCheckboxState(t, checkBox) === false) {
    //         await this.helper.ClickCheckbox(t, checkBox);
    //     }
    // }
}
