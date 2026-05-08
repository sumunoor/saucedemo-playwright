const { test, expect } = require('@playwright/test');

test('Login with standard_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // ✅ Expect products page visible
  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Login with locked_out_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // ❌ Expect error message
  await expect(page.locator('[data-test="error"]'))
    .toHaveText(/Sorry, this user has been locked out./i);
});

test('Login with problem_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'problem_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // ✅ Products page should load
  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Login with performance_glitch_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'performance_glitch_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // ✅ Products page should load (may be slow)
  await expect(page.locator('.inventory_list')).toBeVisible();
});
