import { platformName } from '../helpers/constants.ts';

class Header {
  get cartIcon(): ChainablePromiseElement {
    return $('~test-Cart');
  }

  getCartCounter(expectedAmount: number): ChainablePromiseElement {
    if (platformName === 'ios')
      return this.cartIcon.$(`//*[@name="${expectedAmount}"]`);
    return this.cartIcon.$(`//*[@text="${expectedAmount}"]`);
  }
}

export default new Header();