export const sharedConfig: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,
    specs: [
        '../test/specs/**/*.ts'
    ],
    maxInstances: 1,
    logLevel: 'info',
    capabilities: [],
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
