# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Dashboard.spec.ts >> Dashboard Page - Logged In
- Location: tests\ui\Dashboard.spec.ts:3:5

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
  1  | import { test, expect } from '../../src/fixture/authFixture';
  2  | 
  3  | test('Dashboard Page - Logged In', async ({ authenticatedPage }) => {
  4  |   // Navigate to dashboard - page is already authenticated
  5  |   await authenticatedPage.goto('/web/index.php/dashboard/index');
  6  |   
  7  |   // Wait for page to fully load
  8  |   await authenticatedPage.waitForLoadState('networkidle');
  9  | 
  10 |   // Verify we're on the dashboard
> 11 |   await expect(authenticatedPage).toHaveURL(/dashboard/);
     |                                   ^ Error: expect(page).toHaveURL(expected) failed
  12 | });
```