module.exports = {
  timeout: 120000,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
};