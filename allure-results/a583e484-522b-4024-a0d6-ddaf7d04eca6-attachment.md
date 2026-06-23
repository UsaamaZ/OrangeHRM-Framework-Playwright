# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Logout.spec.ts >> Authentication flow >> logout after login
- Location: tests\ui\Logout.spec.ts:9:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder(/email/i)

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { Page } from '@playwright/test'
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |     constructor(private page: Page) { }
  6  | 
  7  |     get username() {
  8  |         return this.page.getByPlaceholder(/email/i);
  9  |     }
  10 |     get password() {
  11 |         return this.page.getByPlaceholder(/password/i);
  12 |     }
  13 |     get loginBtn() {
  14 |         return this.page.getByRole('button', { name: /sign in/i });
  15 | 
  16 |     }
  17 |     // get errorMessage() {
  18 |     //     return this.page.locator('.oxd-alert.oxd-alert--error');
  19 | 
  20 |     // }
  21 |     get errorMessage() {
  22 |         return this.page.getByRole('alert', { name: /error/i });
  23 | 
  24 |     }
  25 |     async login(user: string, pass: string) {
  26 | 
> 27 |         await this.username.pressSequentially(user, { delay: 50 });
     |                             ^ Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
  28 |         await this.password.pressSequentially(pass, { delay: 50 });
  29 |         await this.loginBtn.click();
  30 |     }
  31 | }
```