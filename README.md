# OrangeHRM Automation Framework

A UI automation framework built with Playwright and TypeScript using the OrangeHRM demo application. The goal of this project is to follow a clean and scalable framework structure while keeping the code easy to maintain and extend.


## Tech Stack

* Playwright
* TypeScript
* Node.js
* Allure Report
* Dotenv


## Current Features

* Page Object Model (POM)
* Custom Playwright Fixtures
* Global Authentication Setup
* Storage State Authentication
* Automatic Authentication Refresh
* Environment-based Configuration
* Allure Reporting
* Allure Metadata (Epic, Feature, Story, Severity, Owner & Tags)
* Environment Information in Allure Report



## Project Structure

```text
src
├── config
├── fixture
├── pages
├── setup
└── utils

tests
├── ui
└── api

---

## Getting Started

Install dependencies

```bash
npm install
```

Run all UI tests

```bash
npm run test:ui
```

Generate the Allure report

```bash
npm run allure:generate
```

Open the report

```bash
npm run allure:open
```

Or generate and open the report in one command

```bash
npm run report
```

---

## Configuration

The framework uses a `.env` file to manage configuration.

Example values:

```env
BASE_URL=
USERNAME=
PASSWORD=

APPLICATION_NAME=
TEST_ENVIRONMENT=
BROWSER=
TESTER=
```

This keeps the framework flexible and avoids changing the code when switching environments.


## Current Test Coverage

### UI

* Login
* Dashboard Verification

### API

Project structure is ready for future API automation.


## What's Next

* Automatic screenshots on test failure
* Video attachments in Allure
* Trace files
* API automation
* CI/CD integration

## Author

Usama Zaheer Butt

QA Automation Engineer
