import { test as base, expect, type Page } from '@playwright/test';

export const test = base.extend({});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed' && page) {
    try {
      const screenshot = await page.screenshot({ timeout: 5000 });
      await testInfo.attach('screenshot-on-failure', {
        body: screenshot,
        contentType: 'image/png',
      });
    } catch (error) {
      console.warn('Unable to attach failure screenshot:', error);
    }
  }
});

export { expect };
