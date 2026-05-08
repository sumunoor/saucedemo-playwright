import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test.describe('Q2 - Standard User Purchase Flow', () => {

  test('Standard user: reset state, add 3 items, checkout, verify order, reset and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.verifyPageLoaded();

    await productsPage.resetState();

    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.addProductToCart('sauce-labs-bike-light');
    await productsPage.addProductToCart('sauce-labs-bolt-t-shirt');
    await productsPage.verifyCartCount(3);

    await productsPage.goToCart();
    await cartPage.verifyItemsInCart([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt'
    ]);

    await cartPage.checkout();
    await checkoutPage.fillDetails('Test', 'User', '12345');
    await checkoutPage.verifyProductsInSummary([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt'
    ]);
    await checkoutPage.verifyTotalExists();
    await checkoutPage.finishOrder();
    await checkoutPage.verifySuccess();

    await productsPage.resetState();
    await productsPage.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});