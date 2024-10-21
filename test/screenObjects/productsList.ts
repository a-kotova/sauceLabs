import { ifiOS } from '../helpers/utils.ts';

class ProductsList {
  async getProductCard(productTitle: string): ChainablePromiseElement {
    if (ifiOS()) {
      await driver.execute('mobile: scroll', {
        direction: 'down',
        strategy: 'name',
        selector: productTitle,
      });
      return $(
        `//XCUIElementTypeStaticText[@name="test-Item title" and @label="${productTitle}"]`
      );
    }
    return $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${productTitle}")`
    );
  }
}

export default new ProductsList();
