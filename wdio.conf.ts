import path from 'path'

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,
    specs: [
        './test/specs/**/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [{
        'appium:platformName': 'Android',
        'appium:platformVersion': '12',
        'appium:deviceName': 'Pixel_4',
        'appium:appWaitActivity': 'com.swaglabsmobileapp.MainActivity',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/sauceLab.apk'),
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
