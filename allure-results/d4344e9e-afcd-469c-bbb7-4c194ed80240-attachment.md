# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Dashboard.spec.ts >> Dashboard Page - Logged In
- Location: tests\ui\Dashboard.spec.ts:5:5

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
- alert:
  - text: 
  - paragraph: Invalid credentials
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
  2  | import { AuthService } from '../../src/setup/auth.service';
  3  | import { ENV } from '../../src/config/env';
  4  | 
  5  | test('Dashboard Page - Logged In', async ({ page }) => {
  6  |   // Go to login page
  7  |   await page.goto(ENV.baseUrl);
  8  |   
  9  |   // Create auth service and login
  10 |   const authService = new AuthService(page);
  11 |   await authService.login(ENV.username, ENV.password);
  12 |   
  13 |   // After successful login, we should be on dashboard
  14 |   // Wait a moment for any redirects
  15 |   await page.waitForLoadState('networkidle');
  16 |   
  17 |   // Verify we're on the dashboard
  18 |   const url = page.url();
  19 |   console.log('Current URL:', url);
  20 |   
> 21 |   await expect(page).toHaveURL(/dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  22 | });
```