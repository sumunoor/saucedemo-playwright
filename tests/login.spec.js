const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Q1 - Login Tests', () => {

  test('Login with locked_out_user and verify error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.verifyErrorMessage('Sorry, this user has been locked out.');
  });

});