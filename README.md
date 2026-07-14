# OrangeHRM Automation Framework

A scalable UI and API automation framework built with **Playwright** and **TypeScript** using the OrangeHRM Demo application. The framework is designed following industry best practices with a strong focus on maintainability, reusability, reporting, and CI/CD integration.

---

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Allure Report
- Axios
- Dotenv
- Cross-env
- GitHub Actions

---

## Framework Features

- Page Object Model (POM)
- Reusable Components
- Custom Playwright Fixtures
- Global Authentication Setup
- Storage State Authentication
- Automatic Authentication Refresh
- Environment-Based Configuration (QA, DEV, UAT, PROD)
- API Client Architecture
- Dynamic Test Data Generation
- Allure Reporting
- Allure Metadata (Epic, Feature, Story, Severity, Owner and Tags)
- Environment Information in Allure Reports
- GitHub Actions Pipeline
- Slack Notification Integration

---

## Project Structure

```text
.
├── .github
│   └── workflows
├── auth
├── env
├── scripts
├── src
│   ├── api
│   ├── config
│   ├── fixture
│   ├── pages
│   ├── setup
│   ├── test-data
│   └── utils
├── tests
│   ├── api
│   ├── demo
│   └── ui
├── playwright.config.ts
└── package.json
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

---

## Execute Tests

### QA

```bash
npm run qa:headed
npm run qa:headless
```

### DEV

```bash
npm run dev:headed
npm run dev:headless
```

### UAT

```bash
npm run uat:headed
npm run uat:headless
```

### PROD

```bash
npm run prod:headed
npm run prod:headless
```

---

## Allure Reports

Generate the report

```bash
npm run allure:generate
```

Open the report

```bash
npm run allure:open
```

Generate and open the report

```bash
npm run report
```

---

## Environment Configuration

The framework uses environment-specific configuration files located in the `env` directory.

Example:

```env
APPLICATION_NAME=
TEST_ENVIRONMENT=

BASE_URL=
USERNAME=
PASSWORD=

BROWSER=
HEADLESS=

This approach allows the same test suite to run against multiple environments without modifying the source code.

---

## Current Automation Coverage

### UI Automation

- Login
- Dashboard Verification
- Add Employee
- Search Employee

### API Automation

- Employee APIs
- Leave APIs

---

## Reporting

The framework integrates Allure Reports with support for:

- Execution Summary
- Test Categories
- Environment Details
- Screenshots on Failure
- Trace Files
- Videos
- History Trend
- Custom Metadata

---

## CI/CD

The project includes a GitHub Actions pipeline that automatically:

- Installs dependencies
- Executes Playwright tests
- Generates Allure Reports
- Sends Slack Notifications
- Supports multiple environments

---

## Future Enhancements

- Employee CRUD API Integration
- Leave Module UI Automation
- Hybrid UI + API Scenarios
- GitHub Pages for Allure Report Publishing
- Parallel Execution Optimization
- Docker Support

---

## Author
QA Automation Engineer