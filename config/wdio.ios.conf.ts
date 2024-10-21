import path from 'path';
import { sharedConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  capabilities: [
    {
      'appium:platformName': 'ios',
      'appium:platformVersion': process.env.PLATFORM_VERSION,
      'appium:deviceName': process.env.DEVICE_NAME,
      'appium:automationName': 'XCUITest',
      'appium:app': path.join(
        process.cwd(),
        'app/ios/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.app'
      ),
      'appium:autoLaunch': false,
    },
  ],
};
