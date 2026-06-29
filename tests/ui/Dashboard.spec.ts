import { test, expect } from '../../src/fixture/authFixture';
import { AllureHelper } from '../../src/utils/allureHelper';
import { Severity } from "allure-js-commons";

const dashboardUrl = '/web/index.php/dashboard/index';

test('Dashboard - Verify logged in state', async ({ authenticatedPage: page }) => {

  await AllureHelper.addMetadata("Dashboard",
    "Dashboard Verification",
    "Verify authenticated user can access dashboard",
    Severity.CRITICAL,
    "Usama Zaheer Butt",
    ["Smoke", "Regression"]
  );

  await test.step('Open the dashboard page', async () => {
    await page.goto(dashboardUrl, { timeout: 60000, waitUntil: 'commit' });
    await page.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => null);
  });

  await test.step('Verify dashboard URL and title', async () => {
    const currentUrl = page.url();
    const pageTitle = await page.title();

    expect(currentUrl).toContain('dashboard');
    expect(pageTitle.length).toBeGreaterThan(0);

    await test.info().attach('dashboard-url.txt', {
      body: currentUrl,
      contentType: 'text/plain',
    });
    await test.info().attach('dashboard-title.txt', {
      body: pageTitle,
      contentType: 'text/plain',
    });

    const screenshot = await page.screenshot();
    await test.info().attach('dashboard-screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  });
});
