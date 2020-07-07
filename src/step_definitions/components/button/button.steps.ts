/// <reference types="@applitools/eyes-testcafe" />
import { binding, when, then } from 'cucumber-tsflow/dist';
import { HelperService } from '../../../support/helper.service';
import { testControllerHolder } from '../../../support/test-controller-holder';
import environment = require('./../../../environment');



@binding()
export class ButtonSteps {
    private helper = new HelperService();


    @when(/^I click the button with id (.*)$/)
    public async ClickButtonWithId(id: string) {
        const t: TestController = await testControllerHolder.get();
        await this.helper.ClickElement(t, await this.helper.GetElementById(t, id));
    }


    @then(/^I see the (?:image|button|bar|selector) with id (.*)$/)
    public async IsElementVisible(id: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect(await this.helper.DoesElementExist(t, id)).ok();
    }

    @then(/^I cannot see the (?:image|button|bar|selector) with id (.*)$/)
    public async IsElementNotVisible(id: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect(await this.helper.DoesElementExist(t, id)).notOk();
    }

    @then(/^the filter with id (.*) is visible$/)
    public async IsFilterVisible(id: string, text: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect((await (await this.helper.GetElementById(t, id)).getAttribute('class'))).eql('filter_col show');
    }

    @then(/^the filter with id (.*) is not visible$/)
    public async IsFilterNotVisible(id: string, text: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect((await (await this.helper.GetElementById(t, id)).getAttribute('class'))).eql('filter_col');
    }

    @then(/^I see the element with id (.*) contains (.*)$/)
    public async DoesElementContainsText(id: string, text: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect((await (await this.helper.GetElementById(t, id)).innerText).trim()).eql(text.trim());
    }
    
        @then(/^I see the email input with id (.*) has (.*) placeholder$/)
    public async IsEmailPlaceholderCorrect(id: string, text: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect((await (await this.helper.GetElementById(t, id)).getAttribute('placeholder')).trim()).eql(text);
    }
  
    @then(/^I see the size selector with id (.*) contains current text (.*)$/)
    public async IsSizeSelectorTextCorrect(id: string, text: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect((await (await this.helper.GetElementById(t, id)).find('option').withAttribute('selected').innerText).trim()).eql(text);
    }

    @then(/^I see the quantity selector with id (.*) contains value (.*)$/)
    public async IsQuantitySelectorValueCorrect(id: string, text: string) {
        const t: TestController = await testControllerHolder.get();
        environment.domId = id;
        await t.expect((await (await this.helper.GetElementById(t, id)).getAttribute('value'))).eql(text);
    }

}
