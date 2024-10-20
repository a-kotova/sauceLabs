class ProductCard {
  private getAddedProduct(productTitle: string): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="${productTitle}"]/parent::*//parent::*`);
  }

  private getProductPrice(productTitle: string): ChainablePromiseElement {
    return this.getAddedProduct(productTitle).$('~test-Price').$('android.widget.TextView');
  }

  private getProductQty(productTitle: string): ChainablePromiseElement {
    return this.getAddedProduct(productTitle).$('~test-Amount').$('android.widget.TextView');
  }

  private async verifyAddedProductIsDisplayed(productTitle: string): ChainablePromiseElement {
    await expect(this.getAddedProduct(productTitle)).toBeDisplayed();
  }

  private async verifyProductPriceIsCorrect(targetProduct: string, expectedPrice: string): Promise<void> {
    await expect(this.getProductPrice(targetProduct)).toHaveText(expectedPrice);
  }

  private async verifyProductQtyIsCorrect(targetProduct: string, expectedQty: string): Promise<void> {
    await expect(this.getProductQty(targetProduct)).toHaveText(expectedQty);
  }

  async verifyAddedProductIsDisplayedCorrectly(productDetails, productQty: number): Promise<void> {
    await this.verifyAddedProductIsDisplayed(productDetails.title);
    await this.verifyProductPriceIsCorrect(productDetails.title, `$${productDetails.price}`);
    await this.verifyProductQtyIsCorrect(productDetails.title, productQty.toString());
  }
}

export default ProductCard;
