class ProductsList {
  getProductCard(productTitle: string): ChainablePromiseElement {
    return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${productTitle}")`);
  }
}

export default new ProductsList();
