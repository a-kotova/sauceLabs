import path from 'path';
import { sharedConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  capabilities: [
    {
      'appium:platformName': 'Android',
      'appium:platformVersion': process.env.PLATFORM_VERSION,
      'appium:deviceName': process.env.DEVICE_NAME,
      'appium:appWaitActivity': 'com.swaglabsmobileapp.MainActivity',
      'appium:automationName': 'UIAutomator2',
      'appium:app': path.join(process.cwd(), 'app/android/sauceLab.apk'),
      'appium:autoLaunch': false,
    },
  ],
};
