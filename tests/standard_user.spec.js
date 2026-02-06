const { test, expect } = require('@playwright/test');

test('Standard user purchase flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#add-to-cart-sauce-labs-bike-light');
  await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');
  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  const products = await page.locator('.inventory_item_name').allTextContents();
  expect(products).toContain('Sauce Labs Backpack');
  expect(products).toContain('Sauce Labs Bike Light');
  expect(products).toContain('Sauce Labs Bolt T-Shirt');
  const total = await page.locator('.summary_total_label').textContent();
  expect(total).toContain('Total:');

  await page.click('#finish');
  const successMsg = await page.locator('.complete-header').textContent();
 expect(successMsg).toContain('Thank you for your order!');

  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#logout_sidebar_link');
});
