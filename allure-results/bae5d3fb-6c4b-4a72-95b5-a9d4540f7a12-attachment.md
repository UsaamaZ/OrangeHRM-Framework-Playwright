# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Dashboard.spec.ts >> Dashboard Page - Verify Logged In State
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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Dashboard Page - Verify Logged In State', async ({ page }) => {
  4  |   // Global setup has already authenticated and saved state
  5  |   // Just navigate to a protected page to verify auth works
  6  |   await page.goto('/');
  7  |   
  8  |   // If auth state is loaded, we should NOT see login page
  9  |   await page.waitForLoadState('networkidle');
  10 |   
  11 |   const isLoginPage = page.url().includes('/auth/login');
  12 |   console.log('Is Login Page:', isLoginPage);
  13 |   console.log('Current URL:', page.url());
  14 |   
  15 |   // With proper auth state loading, this should pass
  16 |   if (!isLoginPage) {
  17 |     await expect(page).toHaveURL(/dashboard/);
  18 |   } else {
  19 |     // If we land on login, it means storageState didn't load
  20 |     console.log('⚠️ Auth state not loaded - navigating directly to dashboard');
  21 |     await page.goto('/web/index.php/dashboard/index');
  22 |     await page.waitForLoadState('networkidle');
> 23 |     await expect(page).toHaveURL(/dashboard/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  24 |   }
  25 | });
```