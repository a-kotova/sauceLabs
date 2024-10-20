import loginScreen from '../screenObjects/login.ts';
import plpScreen from '../screenObjects/productsList.ts';
import header from '../screenObjects/header.ts';
import pdpScreen from '../screenObjects/productDetails.ts';
import cartScreen from '../screenObjects/cart.ts';
import checkoutScreen from '../screenObjects/checkout.ts';
import products from '../data/products.ts';
import paymentDetails from '../data/paymentDetails.ts';
import userDetails from '../data/userDetails.ts';
import _ from 'lodash';
import { Product } from '../helpers/customTypes.ts';

// @ts-ignore
const targetProduct: Product = _.sample(products);

describe('test scenarios', () => {
  beforeEach(async () => {
    await driver.activateApp('com.swaglabsmobileapp');
  });

  it('should be possible to place the order', async () => {
    await loginScreen.loginAsUser(userDetails);
    await plpScreen.getProductCard(targetProduct.title).click();
    await expect(pdpScreen.productTitle).toHaveText(targetProduct.title);
    await pdpScreen.addToCartButton.click();
    await expect(header.getCartCounter(1)).toBeDisplayed();
    await header.cartIcon.click();
    await cartScreen.verifyAddedProductIsDisplayedCorrectly(targetProduct, 1);
    await cartScreen.verifyNumberOfUniqueCartProducts(1);
    await cartScreen.goToCheckoutButton.click();
    await checkoutScreen.enterPaymentDetails(paymentDetails);
    await checkoutScreen.continueButton.click();
    await checkoutScreen.verifyAddedProductIsDisplayedCorrectly(
      targetProduct,
      1
    );
    await checkoutScreen.finishOrderButton.click();
    await checkoutScreen.verifyOrderConfirmationIsDisplayed();
  });

  afterEach(async () => {
    await driver.terminateApp('com.swaglabsmobileapp');
  });
});
