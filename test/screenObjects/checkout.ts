import productCard from './productCard.ts';
import { PaymentDetails } from '../helpers/customTypes.ts';
import { ifiOS } from '../helpers/utils.ts';

class Checkout extends productCard {
  get firstNameField(): ChainablePromiseElement {
    return $('~test-First Name');
  }

  get lastNameField(): ChainablePromiseElement {
    return $('~test-Last Name');
  }

  get zipCodeField(): ChainablePromiseElement {
    return $('~test-Zip/Postal Code');
  }

  get continueButton(): ChainablePromiseElement {
    return $('~test-CONTINUE');
  }

  async getFinishOrderButton(): Promise<ChainablePromiseElement> {
    if (ifiOS()) {
      await driver.execute('mobile: scroll', {
        direction: 'down',
        strategy: 'name',
        selector: 'FINISH',
      });
      return $('~test-FINISH');
    }
    return $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-FINISH"))`
    );
  }

  get orderConfirmation(): ChainablePromiseElement {
    return $('~test-CHECKOUT: COMPLETE!');
  }

  async enterPaymentDetails(paymentDetails: PaymentDetails): Promise<void> {
    await this.firstNameField.addValue(paymentDetails.firstName);
    await this.lastNameField.addValue(paymentDetails.lastName);
    await this.zipCodeField.addValue(paymentDetails.zipCode);
  }

  async verifyOrderConfirmationIsDisplayed(): Promise<void> {
    await expect(this.orderConfirmation).toBeDisplayed();
  }
}

export default new Checkout();
