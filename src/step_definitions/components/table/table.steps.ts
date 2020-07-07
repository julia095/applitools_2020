import { binding, then, given } from 'cucumber-tsflow/dist';
import { HelperService } from '../../../support/helper.service';
import { testControllerHolder } from '../../../support/test-controller-holder';

@binding()
export class TableSteps {
    private helper = new HelperService();

    @then(/^I should see (.*) in the first cell of the element with id (.*)$/)
    public async FirstCellShouldContainString(stringValue: string, testId: string) {
        const t: TestController = await testControllerHolder.get();
        const stringRow = (await this.helper.GetElementById(t, testId))
        .find('tbody>tr>td').withText(stringValue);
        await t.expect(stringRow.exists).ok();
    }

    @then(/^the cell titled (.*) in the table with id (.*) should show the (.*) account icon$/)
    public async TitledCellShouldContainClass(accountName: string, testId: string, className: string) {
        const t: TestController = await testControllerHolder.get();
        let cellTbody = (await this.helper.GetElementById(t, testId))
        .find('tbody>tr>td').withText(accountName).parent('tbody');
        if (!await cellTbody.exists) {
             cellTbody = (await this.helper.GetElementById(t, testId))
             .find('tbody>tr>td>span').withText(accountName).parent('tbody');
         }
        await t.expect(cellTbody.hasClass(className)).ok();
    }

    @then(/^the cell titled (.*) in the table with id (.*) should not show the (.*) account icon$/)
    public async TitledCellShouldNotContainClass(accountName: string, testId: string, className: string) {
        const t: TestController = await testControllerHolder.get();
        let cellTbody = (await this.helper.GetElementById(t, testId))
        .find('tbody>tr>td').withText(accountName).parent('tbody');
        if (!await cellTbody.exists) {
             cellTbody = (await this.helper.GetElementById(t, testId))
             .find('tbody>tr>td>span').withText(accountName).parent('tbody');
         }
        await t.expect(cellTbody.hasClass(className)).notOk();
    }

    @given(/^I select (.*) from the group modal with id (.*)$/)
    public async SelectGroupFromModal(orgName: string, testId: string) {
        const t: TestController = await testControllerHolder.get();
        const orgCell = (await this.helper.GetElementById(t, testId))
        .find('tr>td').withText(orgName);
        await this.helper.ClickElement(t, orgCell);
    }
}
