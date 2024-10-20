import productCard from './productCard.ts';

class Cart extends productCard {
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
}

export default new Cart();
