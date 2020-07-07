import { binding, when, given, then } from 'cucumber-tsflow';
import { testControllerHolder } from '../../support/test-controller-holder';
import { EyesHolder } from '../../support/applitools';
import environment = require('../../environment');



@binding()
export class VisualValidationSteps {
    
    
    @then(/^I observe elements are correct on all devices for (.*)$/)
    public async ValidateElements(taskName: string) {
        const t: TestController = await testControllerHolder.get();
        environment.eyesHolderInstance = new EyesHolder(t, taskName);        
        await environment.eyesHolderInstance.validateWindow();
    }
}
