const { test, expect, chromium } = require('@playwright/test');

test('Performance glitch user purchase flow', async () => {
  // Launch browser with slowMo so every action pauses ~1s
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Give the test a generous timeout
  test.setTimeout(120000);

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('performance_glitch_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  const sortDropdown = page.locator('.product_sort_container');
  await expect(sortDropdown).toBeVisible();
  await sortDropdown.selectOption('za');

  await page.locator('.btn_inventory').first().click();

  await expect(page.locator('.shopping_cart_link')).toBeVisible();
  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('#checkout')).toBeVisible();
  await page.locator('#checkout').click();

  await page.locator('#first-name').fill('Perf');
  await page.locator('#last-name').fill('User');
  await page.locator('#postal-code').fill('54321');
  await page.locator('#continue').click();

  const products = await page.locator('.inventory_item_name').allTextContents();
  expect(products.length).toBeGreaterThan(0);

  const total = await page.locator('.summary_total_label').textContent();
  expect(total).toContain('Total:');

  await page.locator('#finish').click();
  await expect(page.locator('.complete-header')).toHaveText(/Thank you for your order!/);

  await browser.close();
});