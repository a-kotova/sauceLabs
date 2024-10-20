import { platformName } from '../helpers/constants.ts';

class ProductDetails {
  get productTitle(): ChainablePromiseElement {
    if (platformName === 'ios')
      return $('~test-Description').$$('//*')[0];
    return $('~test-Description').$$('android.widget.TextView')[0];
  }

  async getAddToCartButton(): Promise<ChainablePromiseElement> {
    if (platformName === 'ios') {
      await driver.execute('mobile: scroll', {
        direction: 'down',
        strategy: 'name',
        selector: 'ADD TO CART'
      });
      return $('~test-ADD TO CART');
    }
    return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("ADD TO CART")`);
  }

  async verifyUserIsOnCorrectPDP(productTitle: string): Promise<void> {
    if(platformName === 'ios') {
      expect((await this.productTitle.getText()).startsWith(productTitle)).toBe(true);
    } else {
      expect(this.productTitle).toHaveText(productTitle);
    }
  }
}

export default new ProductDetails();
