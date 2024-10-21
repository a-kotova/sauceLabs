import { ifiOS } from '../helpers/utils.ts';

class Header {
  get cartIcon(): ChainablePromiseElement {
    return $('~test-Cart');
  }

  getCartCounter(expectedAmount: number): ChainablePromiseElement {
    if (ifiOS()) return this.cartIcon.$(`//*[@name="${expectedAmount}"]`);
    return this.cartIcon.$(`//*[@text="${expectedAmount}"]`);
  }
}

export default new Header();
