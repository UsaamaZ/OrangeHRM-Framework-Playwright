# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/test.spec.ts >> Playwright Demo
- Location: tests/test.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://google.com/", waiting until "load"

```

# Test source

```ts
  1 | import { test } from "@playwright/test";
  2 | 
  3 | test("Playwright Demo", async ({ page }) => {
  4 | 
> 5 |     await page.goto("https://google.com");
    |                ^ Error: page.goto: Target page, context or browser has been closed
  6 | 
  7 |     await page.pause();
  8 | 
  9 | });
```