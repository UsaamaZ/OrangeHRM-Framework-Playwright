# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/Employee/SearchEmployee.spec.ts >> Employee Search >> Search existing employee
- Location: tests/ui/Employee/SearchEmployee.spec.ts:7:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'PIM' })

```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class Sidebar {
  4  | 
  5  |     constructor(private page: Page) {}
  6  | 
  7  |     async openDashboard() {
  8  |         await this.page.getByRole("link", { name: "Dashboard" }).click();
  9  |     }
  10 | 
  11 |     async openPIM() {
> 12 |         await this.page.getByRole("link", { name: "PIM" }).click();
     |                                                            ^ Error: locator.click: Target page, context or browser has been closed
  13 |     }
  14 | 
  15 |     async openLeave() {
  16 |         await this.page.getByRole("link", { name: "Leave" }).click();
  17 |     }
  18 | 
  19 |     async openAdmin() {
  20 |         await this.page.getByRole("link", { name: "Admin" }).click();
  21 |     }
  22 | 
  23 |     async openRecruitment() {
  24 |         await this.page.getByRole("link", { name: "Recruitment" }).click();
  25 |     }
  26 | 
  27 |     async openBuzz() {
  28 |         await this.page.getByRole("link", { name: "Buzz" }).click();
  29 |     }
  30 | }
```