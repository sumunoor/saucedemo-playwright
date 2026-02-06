const { test, expect } = require('@playwright/test');

test('Login with locked_out_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const errorMsg = await page.locator('[data-test="error"]').textContent();
  expect(errorMsg).toContain('Sorry, this user has been locked out.');
});
