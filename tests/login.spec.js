const { test, expect } = require('@playwright/test');

test('Login with locked_out_user', async ({ page }) => {
  // Extend timeout globally for this test
  test.setTimeout(90000);

  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('#user-name');
  const password = page.locator('#password');
  const loginBtn = page.locator('#login-button');
  const errorMsgLocator = page.locator('[data-test="error"]');

  await username.fill('locked_out_user');
  await password.fill('secret_sauce');

  // Wait for login button to be ready
  await expect(loginBtn).toBeVisible();
  await expect(loginBtn).toBeEnabled();

  await loginBtn.click();

  // Assert error message
  await expect(errorMsgLocator).toBeVisible();
  const errorMsg = await errorMsgLocator.textContent();
  expect(errorMsg).toContain('Sorry, this user has been locked out.');
});