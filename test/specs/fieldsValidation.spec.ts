import loginScreen from '../screenObjects/login.ts';
import userDetails from '../data/userDetails.js';

describe('test scenarios to check validation of login fields', () => {
  beforeEach(async () => {
    await driver.activateApp('com.swaglabsmobileapp');
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
    await driver.terminateApp('com.swaglabsmobileapp');
  });
});
