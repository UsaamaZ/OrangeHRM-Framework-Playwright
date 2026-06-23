# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Login.spec.ts >> Valid Login
- Location: tests\ui\Login.spec.ts:6:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../src/pages/LoginPage'
  3  | // import users from '../test-data/users.json';
  4  | 
  5  | 
  6  | test('Valid Login', async ({ page }) => {
  7  |   await page.goto('/');
  8  | 
  9  |   const loginPage = new LoginPage(page);
  10 | 
  11 |   // await loginPage.login(
  12 |   //   users.validUser.username,
  13 |   //   users.validUser.password
  14 |   // );
  15 | 
> 16 |   await expect(page).toHaveURL(/dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  17 | 
  18 | 
  19 | });
```