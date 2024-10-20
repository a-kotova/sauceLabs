import { Product } from '../helpers/customTypes.ts';
import { platformName } from '../helpers/constants.ts';

class ProductCard {
  private getAddedProduct(productTitle: string): ChainablePromiseElement {
    if (platformName === 'ios')
      return $(`//*[@name="${productTitle}"]/parent::*//parent::*`);
    return $(`//*[@text="${productTitle}"]/parent::*//parent::*`);
  }

  private getProductPrice(productTitle: string): ChainablePromiseElement {
    if (platformName === 'ios')
      return this.getAddedProduct(productTitle).$('~test-Price').$$('//*')[0];
    return this.getAddedProduct(productTitle).$('~test-Price').$('android.widget.TextView');

  }

  getRemoveProductButton(productTitle: string): ChainablePromiseElement {
    return this.getAddedProduct(productTitle).$('~test-REMOVE');
  }

  private async verifyAddedProductIsDisplayed(productTitle: string): ChainablePromiseElement {
    await expect(this.getAddedProduct(productTitle)).toBeDisplayed();
  }

  private async verifyProductPriceIsCorrect(targetProduct: string, expectedPrice: string): Promise<void> {
    if (platformName === 'ios') {
      await expect((await this.getProductPrice(targetProduct).getText()).startsWith(expectedPrice)).toBe(true);
    } else {
      await expect(this.getProductPrice(targetProduct)).toHaveText(expectedPrice);
    }
  }

  async verifyAddedProductIsDisplayedCorrectly(productDetails: Product): Promise<void> {
    await this.verifyAddedProductIsDisplayed(productDetails.title);
    await this.verifyProductPriceIsCorrect(productDetails.title, `$${productDetails.price}`);
  }
}

export default ProductCard;
