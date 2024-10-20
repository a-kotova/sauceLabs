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
import { appID } from '../helpers/constants.ts';

// @ts-ignore
const targetProduct: Product = _.sample(products);

describe('test scenarios', () => {
  beforeEach(async () => {
    await driver.activateApp(appID);
  });

  it('should be possible to place the order', async () => {
    await loginScreen.loginAsUser(userDetails);
    await (await plpScreen.getProductCard(targetProduct.title)).click();
    await pdpScreen.verifyUserIsOnCorrectPDP(targetProduct.title);
    await (await pdpScreen.getAddToCartButton()).click();
    await expect(header.getCartCounter(1)).toBeDisplayed();
    await header.cartIcon.click();
    await cartScreen.waitForCartToBeDisplayed();
    await cartScreen.verifyAddedProductIsDisplayedCorrectly(targetProduct);
    await cartScreen.verifyNumberOfUniqueCartProducts(1);
    await cartScreen.goToCheckoutButton.click();
    await checkoutScreen.enterPaymentDetails(paymentDetails);
    await checkoutScreen.continueButton.click();
    await checkoutScreen.verifyAddedProductIsDisplayedCorrectly(targetProduct);
    await (await checkoutScreen.getFinishOrderButton()).click();
    await checkoutScreen.verifyOrderConfirmationIsDisplayed();
  });

  it('should be possible to remove product from the cart', async () => {
    await loginScreen.loginAsUser(userDetails);
    await (await plpScreen.getProductCard(targetProduct.title)).click();
    await pdpScreen.verifyUserIsOnCorrectPDP(targetProduct.title);
    await (await pdpScreen.getAddToCartButton()).click();
    await header.cartIcon.click();
    await cartScreen.waitForCartToBeDisplayed();
    await cartScreen.verifyNumberOfUniqueCartProducts(1);
    await cartScreen.getRemoveProductButton(targetProduct.title).click();
    await cartScreen.verifyNumberOfUniqueCartProducts(0);
  });

  afterEach(async () => {
    await driver.terminateApp(appID);
  });
});
