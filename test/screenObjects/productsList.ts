class ProductsList {
  async getProductCard(productTitle: string): ChainablePromiseElement {
    const platformName = driver.capabilities.platformName;
    if (platformName === 'ios') {
      await driver.execute('mobile: scroll', {
        direction: 'down',
        strategy: 'name',
        selector: productTitle
      });
      return $(`//XCUIElementTypeStaticText[@name="test-Item title" and @label="${productTitle}"]`);
    }
    return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${productTitle}")`);
  }
}

export default new ProductsList();
