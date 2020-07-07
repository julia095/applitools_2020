import { binding, given, then, when } from 'cucumber-tsflow/dist';
import { testControllerHolder } from '../../../support/test-controller-holder';
import { BASE_URL } from '../../../environment';


@binding()
export class UrlSteps {

    @given(/^I navigate to main page$/)
    public async NavigateToPage() {
        const t: TestController = await testControllerHolder.get();
        await t.navigateTo(BASE_URL);
    }
}
