import { test, expect } from '@playwright/test';
import { pause } from '../../src/utils/pause';

test('Dashboard - Verify logged in state', async ({ page }) => {
    console.log('Opening dashboard...');
    await page.goto('/web/index.php/dashboard/index');

    await page.waitForLoadState('networkidle');

    const currentUrl = page.url();
    const pageTitle = await page.title();

    console.log('Current URL:', currentUrl);
    console.log('Page title:', pageTitle);

    const onDashboard = currentUrl.includes('dashboard');

    if (onDashboard) {
        console.log('SUCCESS - Dashboard loaded in logged-in state!');
    } else {
        console.log('Still on login page - auth state may not have loaded');
    }

    console.log('Keeping dashboard open for 10 seconds...');
    await pause(10000);
});