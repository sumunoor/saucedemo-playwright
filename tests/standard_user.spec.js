const { test, expect } = require('@playwright/test');

test('Standard user purchase flow', async ({ page }) => {
  // Extend timeout globally for this test
  test.setTimeout(120000);

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.waitForTimeout(2000);

  await page.locator('#password').fill('secret_sauce');
  await page.waitForTimeout(2000);

  await page.locator('#login-button').click();
  await page.waitForTimeout(2000);

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.waitForTimeout(2000);

  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.waitForTimeout(2000);

  await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
  await page.waitForTimeout(2000);

  await page.locator('.shopping_cart_link').click();
  await page.waitForTimeout(2000);

  await page.locator('#checkout').click();
  await page.waitForTimeout(2000);

  await page.locator('#first-name').fill('Test');
  await page.waitForTimeout(2000);

  await page.locator('#last-name').fill('User');
  await page.waitForTimeout(2000);

  await page.locator('#postal-code').fill('12345');
  await page.waitForTimeout(2000);

  await page.locator('#continue').click();
  await page.waitForTimeout(2000);

  const products = await page.locator('.inventory_item_name').allTextContents();
  expect(products).toContain('Sauce Labs Backpack');
  expect(products).toContain('Sauce Labs Bike Light');
  expect(products).toContain('Sauce Labs Bolt T-Shirt');

  const total = await page.locator('.summary_total_label').textContent();
  expect(total).toContain('Total:');

  await page.locator('#finish').click();
  await page.waitForTimeout(2000);

  await expect(page.locator('.complete-header')).toHaveText(/Thank you for your order!/);
});