import loginScreen from '../screenObjects/login.ts';
import userDetails from '../data/userDetails.js';
import { appID } from '../helpers/constants.ts';

describe('test scenarios to check validation of login fields', () => {
  beforeEach(async () => {
    await driver.activateApp(appID);
  });

  it('should show error message when missing password', async () => {
    await loginScreen.usernameField.addValue(userDetails.username);
    await loginScreen.loginButton.click();
    await loginScreen.verifyErrorMessageIsShown('Password is required');
  });

  it('should show error message when missing username', async () => {
    await loginScreen.passwordField.addValue(userDetails.password);
    await loginScreen.loginButton.click();
    await loginScreen.verifyErrorMessageIsShown('Username is required');
  });

  afterEach(async () => {
    await driver.terminateApp(appID);
  });
});
