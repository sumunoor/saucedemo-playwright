# SauceDemo Playwright Automation Framework

## Project Overview

This project is an end-to-end automation testing framework developed using Playwright and JavaScript for the SauceDemo e-commerce application.

The framework validates critical business workflows including authentication, product interaction, cart functionality, and checkout process. The project follows Page Object Model (POM) architecture for improved scalability, reusability, and maintainability.

---

# Application Under Test

Website: https://www.saucedemo.com/

---

# Testing Scope

The following modules were tested:

- Login Functionality
- Product Listing
- Add to Cart
- Cart Validation
- Checkout Process
- Logout Functionality

---

# Testing Types Covered

- Functional Testing
- Smoke Testing
- Regression Testing
- UI Testing
- End-to-End Testing
- Cross-Browser Testing

---

# Tech Stack

- Playwright
- JavaScript
- Node.js
- Git & GitHub
- GitHub Actions
- Allure Report

---

# Framework Features

- Page Object Model (POM) Architecture
- Reusable Page Classes
- Automated Assertions & Validations
- Cross-Browser Execution
- Allure Reporting
- Playwright HTML Reporting
- CI/CD Integration using GitHub Actions
- Screenshot Capture on Failure
- Stable Synchronization Strategies

---

# Supported Browsers

- Chromium
- Firefox

---

# Project Structure

```bash
saucedemo-playwright/
│
├── pages/
├── tests/
├── reports/
├── screenshots/
├── allure-results/
├── allure-report/
├── playwright-report/
├── .github/workflows/
├── playwright.config.js
├── package.json
└── README.md
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/sumunoor/saucedemo-playwright.git
```

## Navigate to Project Directory

```bash
cd saucedemo-playwright
```

## Install Dependencies

```bash
npm install
npx playwright install
```

---

# Running Test Cases

## Run All Tests

```bash
npx playwright test --headed
```

## Run Login Test

```bash
npx playwright test tests/login.spec.js --headed
```

## Run Standard User Test

```bash
npx playwright test tests/standard_user.spec.js --headed
```

## Run Performance Glitch User Test

```bash
npx playwright test tests/performance_user.spec.js --headed
```

---

# Reports

## Playwright HTML Report

```bash
npx playwright show-report
```

## Generate Allure Report

```bash
npm run getReport
```

---

# CI/CD Integration

This project is integrated with GitHub Actions for automated test execution and reporting.

CI/CD Features:
- Automated workflow execution
- Continuous Integration pipeline
- Automated validation on code push
- Test execution reporting

---


# Key Achievements

- Developed reusable automation framework using Playwright and POM architecture
- Automated critical e-commerce user workflows
- Integrated CI/CD pipeline using GitHub Actions
- Implemented cross-browser test execution
- Added Allure and Playwright reporting support

---

# Future Improvements

- Data-Driven Testing
- Parallel Execution
- Environment Configuration
- Retry Mechanism
- API Integration Testing

---

# Author

## Sumaiya Noor Muna

- GitHub: https://github.com/sumunoor
- Portfolio: https://sumaiya-sqa.netlify.app/
- LinkedIn: www.linkedin.com/in/sumaiya-noor-a3ab63362
