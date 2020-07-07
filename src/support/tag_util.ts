import environment = require('./../environment');
export default class Util {

    // function to set type of device and a viewport based on the viewport tag . 
    // Or set Applitools to true based on the visual tag
    public static CheckTags(value: string) {
        environment.APPLITOOLS_FLAG = false;
        switch (value) {
            case '@1200x700':
                environment.deviceType = 'Laptop';
                environment.viewPort = '1200x700';
                break;
            case '@768x700':
                environment.deviceType = 'Tablet';
                environment.viewPort = '768x700';
                break;
            case '@500x700':
                environment.deviceType = 'Mobile';
                environment.viewPort = '500x700';
                break;
            case '@visual':
                environment.APPLITOOLS_FLAG = true;
                break;
            case '@visual2':
                environment.APPLITOOLS_FLAG = true;
                break;

            default:
                throw new Error('An error in CheckTags function. Please specify a viewport type.');
        }
    }
    // specific functions to get values from tags values
    public static GetWidthFromTag(tagValue: string) {
        if (tagValue !== undefined) {
            return Number(tagValue.replace('@', '').split('x')[0]);
        }
    }

    public static GetHeightFromTag(tagValue: string) {
        if (tagValue !== undefined) {
            return Number(tagValue.replace('@', '').split('x')[1]);
        }

    }

    public static GetTaskNameFromFileName(fileName: string) {
        if (fileName != undefined) {
            return fileName.split('_')[0].split('700\\')[1];
        } else {
            throw new Error('the scenario file name is incorrect. Error in GetTaskNameFromFileName function')
        }
    }
}