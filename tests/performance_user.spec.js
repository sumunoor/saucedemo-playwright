const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Q3 - Performance Glitch User Purchase Flow', () => {

  test.setTimeout(120000);

  test('Performance glitch user: reset, sort Z-A, add first product, checkout, verify, reset and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Login
    await loginPage.goto();
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await productsPage.verifyPageLoaded();

    // Step 2: Reset App State
    await productsPage.resetState();

    // Step 3: Sort products Z-A
    await productsPage.sortZA();

    // Step 4: Get first product name
    const firstProductName = await productsPage.getFirstProductName();
    expect(firstProductName).toBeTruthy();

    // Step 5: Add first product to cart
    await productsPage.addFirstProductToCart();
    await productsPage.verifyCartCount(1);

    // Step 6: Go to cart
    await productsPage.goToCart();

    // Step 7: Verify cart not empty
    await cartPage.verifyCartNotEmpty();

    // Step 8: Checkout
    await cartPage.checkout();

    // Step 9: Fill checkout details
    await checkoutPage.fillDetails('Perf', 'User', '54321');

    // Step 10: Verify product name in summary
    await checkoutPage.verifyProductsInSummary([firstProductName]);

    // Step 11: Verify total price
    await checkoutPage.verifyTotalExists();

    // Step 12: Finish order
    await checkoutPage.finishOrder();

    // ✅ Step 13: Verify success message (fixed)
    await checkoutPage.verifySuccess();

    // Step 14: Reset App State again
    await productsPage.resetState();

    // Step 15: Logout
    await productsPage.logout();

    // Step 16: Verify redirected to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
