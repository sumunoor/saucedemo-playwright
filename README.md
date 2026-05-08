# SauceDemo Automation Testing (Playwright)

## 📌 Overview
This project contains Playwright automation tests for the [SauceDemo](https://www.saucedemo.com/) website.  
Reports are generated in both `allure-report` and `playwright-report` folders.  
Tests are executed in **Chrome** and **Firefox** browsers.

---

## 🧪 Features Tested
- Login (valid & invalid users)
- Add to cart
- Cart validation
- Checkout flow

---

## 🛠 Requirements
- Node.js (>=18)
- Git (to clone the repo)
- VS Code (recommended editor)

---

## 📦 Packages to Install
```bash
npm install
npx playwright install
# For Allure reports:
npm install --save-dev allure-playwright
npm install -g allure-commandline

# Q1: Login test
npx playwright test tests/login.spec.js --headed

# Q2: Standard user test
npx playwright test tests/standard_user.spec.js --headed

# Q3: Performance glitch user test
npx playwright test tests/performance_user.spec.js --headed

#for run all test together-
npx playwright test --headed
#Playwright HTML report:
npx playwright show-report

#Allure report (custom script):
npm run getReport


---



 
