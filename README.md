This project contains Playwright automation tests for the SauceDemo website(https://www.saucedemo.com/).
 Reports are saved in `allure-report` and `playwright-report` folders.

 To run the test cases:-

 Q1: `npx playwright test tests/login.spec.js --project=chromium`
 Q2: `npx playwright test tests/standard_user.spec.js --project=chromium` 
 Q3: `npx playwright test tests/performance_user.spec.js --project=chromium`

 or to Run all the tests together:-

 "npx playwright test --headed"
