export const platformName = driver.capabilities.platformName;

export const appID =
  platformName === 'ios'
    ? 'com.saucelabs.SwagLabsMobileApp'
    : 'com.swaglabsmobileapp';
