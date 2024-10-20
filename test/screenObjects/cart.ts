import productCard from './productCard.ts';

class Cart extends productCard {
  get cartContent(): ChainablePromiseElement {
    return $('~test-Cart Content');
  }

  get uniqueCartItems(): ChainablePromiseArray {
    return $$('~test-Item');
  }

  get goToCheckoutButton(): ChainablePromiseElement {
    return $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-CHECKOUT"))`
    );
  }

  async verifyNumberOfUniqueCartProducts(
    expectedNumber: number
  ): Promise<void> {
    await expect((await this.uniqueCartItems).length).toBe(expectedNumber);
  }

  async waitForCartToBeDisplayed(): Promise<void> {
    await this.cartContent.waitForDisplayed();
  }
}

export default new Cart();
