import header from './header.ts';
import {UserDetails} from '../helpers/customTypes.ts';
import { platformName } from '../helpers/constants.ts';

class Login {
  get usernameField(): ChainablePromiseElement {
    return $('~test-Username');
  }

  get passwordField(): ChainablePromiseElement {
    return $('~test-Password');
  }

  get loginButton(): ChainablePromiseElement {
    return $('~test-LOGIN');
  }

  get errorMessageToast(): ChainablePromiseElement {
    return $('~test-Error message');
  }

  getErrorMessageText(expectedText: string): ChainablePromiseElement {
    if (platformName === 'ios')
      return this.errorMessageToast.$(`//*[@name="${expectedText}"]`);
    return this.errorMessageToast.$(`//*[@text="${expectedText}"]`);

  }

  async loginAsUser(userDetails: UserDetails): Promise<void> {
    await this.usernameField.addValue(userDetails.username);
    await this.passwordField.addValue(userDetails.password);
    await this.loginButton.click();
    await expect(header.cartIcon).toBeDisplayed();
  }

  async verifyErrorMessageIsShown(errorText: string): Promise<void> {
    await expect(this.errorMessageToast).toBeDisplayed();
    await expect(this.getErrorMessageText(errorText)).toBeDisplayed();
  }
}

export default new Login();
