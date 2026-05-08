import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test.describe('Q3 - Performance Glitch User Purchase Flow', () => {

  test.setTimeout(120000);

  test('Performance glitch user: reset, sort Z-A, add first product, checkout, verify, reset and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await productsPage.verifyPageLoaded();

    await productsPage.resetState();
    await productsPage.sortZA();

    const firstProductName = await productsPage.getFirstProductName();
    expect(firstProductName).toBeTruthy();

    await productsPage.addFirstProductToCart();
    await productsPage.verifyCartCount(1);

    await productsPage.goToCart();
    await cartPage.verifyCartNotEmpty();
    await cartPage.checkout();

    await checkoutPage.fillDetails('Perf', 'User', '54321');
    await checkoutPage.verifyProductsInSummary([firstProductName]);
    await checkoutPage.verifyTotalExists();
    await checkoutPage.finishOrder();
    await checkoutPage.verifySuccess();

    await productsPage.resetState();
    await productsPage.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});