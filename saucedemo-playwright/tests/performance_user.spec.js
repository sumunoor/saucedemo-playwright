const { test, expect } = require('@playwright/test');

test('Performance glitch user purchase flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'performance_glitch_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');

  await page.selectOption('.product_sort_container', 'za');
  await page.locator('.btn_inventory').first().click();

  await page.click('.shopping_cart_link');
  await page.click('#checkout');
  await page.fill('#first-name', 'Perf');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '54321');
  await page.click('#continue');

  const products = await page.locator('.inventory_item_name').allTextContents();
  expect(products.length).toBeGreaterThan(0);

  const total = await page.locator('.summary_total_label').textContent();
  expect(total).toContain('Total:');

  await page.click('#finish');
  const successMsg = await page.locator('.complete-header').textContent();
  expect(successMsg).toContain('THANK YOU FOR YOUR ORDER');

  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#logout_sidebar_link');
});
