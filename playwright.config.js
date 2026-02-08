// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests sequentially, not in parallel */
  fullyParallel: false,
  workers: 1,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],                // shows results in terminal
    ['html'],                // keeps Playwright HTML report
    ['allure-playwright']    // generates Allure results
  ],

  use: {
    headless: false,         
    trace: 'on-first-retry', 
    screenshot: 'only-on-failure', // <-- add this line
    video: 'retain-on-failure',    // optional: keep video on failure
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    /*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});