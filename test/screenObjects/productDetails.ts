class ProductDetails {
  get productTitle(): ChainablePromiseElement {
    return $('~test-Description').$$('android.widget.TextView')[0];
  }

  get addToCartButton(): ChainablePromiseElement {
    return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("ADD TO CART")`);
  }
}

export default new ProductDetails();
