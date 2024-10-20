import header from './header.ts';
import {UserDetails} from '../helpers/customTypes.ts';

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

  async loginAsUser(userDetails: UserDetails): Promise<void> {
    await this.usernameField.addValue(userDetails.username);
    await this.passwordField.addValue(userDetails.password);
    await this.loginButton.click();
    await expect(header.cartIcon).toBeDisplayed();
  }
}

export default new Login();
