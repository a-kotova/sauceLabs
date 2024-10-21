import loginScreen from '../screenObjects/login.ts';
import userDetails from '../data/userDetails.js';
import { appID } from '../helpers/constants.ts';
import messages from '../data/errorMessages.ts';

describe('test scenarios to check validation of login fields', () => {
  beforeEach(async () => {
    await driver.activateApp(appID);
  });

  it('should show error message when missing password', async () => {
    await loginScreen.usernameField.addValue(userDetails.username);
    await loginScreen.loginButton.click();
    await loginScreen.verifyErrorMessageIsShown(messages.emptyPassword);
  });

  it('should show error message when missing username', async () => {
    await loginScreen.passwordField.addValue(userDetails.password);
    await loginScreen.loginButton.click();
    await loginScreen.verifyErrorMessageIsShown(messages.emptyUsername);
  });

  afterEach(async () => {
    await driver.terminateApp(appID);
  });
});
