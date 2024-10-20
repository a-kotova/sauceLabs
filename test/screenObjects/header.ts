class Header {
  get cartIcon(): ChainablePromiseElement {
    return $('~test-Cart');
  }

  getCartCounter(expectedAmount: number): ChainablePromiseElement {
    return $(`//android.view.ViewGroup[@content-desc="test-Cart"]//android.widget.TextView[@text="${expectedAmount}"]`)
  }
}

export default new Header();