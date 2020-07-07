import { Selector } from 'testcafe';

const defaultTimeout = 8000;

export class HelperService {
    
    public async GetElementById(tc: TestController, id: string, timeoutms: number = defaultTimeout) {
        const element = Selector(`[id="${id}"]`).with({ boundTestRun: tc });
        await tc.expect(element.exists).ok({ timeout: timeoutms });
        return element;
    }

    public async DoesElementExist(tc: TestController, selectorId: string) {
        const element = Selector(`[id="${selectorId}"]`).with({ boundTestRun: tc });
        return element.visible;
    }

   
    public async ClickElement(tc: TestController, element: Selector,
        additionalCheck: boolean = true, timeoutms: number = defaultTimeout) {
        if (additionalCheck) {
            await tc.expect(element.exists && element.visible).ok({ timeout: timeoutms });
        }
        await tc.click(element);
    }
}
