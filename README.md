This project contains Playwright automation tests for the SauceDemo website(https://www.saucedemo.com/).
 Reports are saved in `allure-report` and `playwright-report` folders.
 **Here I have used Chrome and firefox to run three cases.**

 To run these project there are some requirements needed:
- Node.js
- Git (to clone the repo)
- VS Code (recommended editor)


**Packages to Install:**
```javascript
npm install
npx playwright install
# for allure reports:
npm install --save-dev allure-playwright
npm install -g allure-commandline```


#  To run the test cases:-
 ## Q1: npx playwright test tests/login.spec.js --headed
 Q2: npx playwright test tests/standard_user.spec.js --headed
 Q3: npx playwright test tests/performance_user.spec.js --headed

**** or to Run all the tests together:-****
 npx playwright test --headed

 **to run allure report:-**
 npm run getReport


 
