import Eyes from '@applitools/eyes-testcafe';





export class EyesHolder {

    private eyes!: Eyes;
    private tc!: TestController;
    private testName!: string;


    public constructor(t: TestController, testName: string) {
        this.tc = t;
        this.testName = testName;
        this.eyes = new Eyes();        
    }

    public async openEyes(t: TestController) {
        await this.eyes.open({t,
            testName: this.testName,
        });
    }

    public async validateWindow() {
        await this.openEyes(this.tc);    
        await this.eyes.checkWindow({
            target: 'window',
            fully: true
        });
        this.eyes.close();
    }

    public async waitForTestResults(eyesInstance: EyesHolder) {
        await eyesInstance.eyes.waitForResults(false);
    }
}
