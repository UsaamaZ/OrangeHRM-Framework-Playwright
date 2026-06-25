import { test, expect } from '../../src/fixture/authFixture';
import { DashboardPage } from '../../src/pages/LogoutPage';

test.describe('Authentication flow', () => {

    test('logout after login', async ({ authenticatedPage: page }) => {

        await page.goto('/web/index.php/dashboard/index', { timeout: 60000, waitUntil: 'commit' });
        await page.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => null);

        const dashboardPage = new DashboardPage(page);

        await expect(page).toHaveURL(/dashboard/i);

        await dashboardPage.userDropdown.click();
        await expect(dashboardPage.logoutBtn).toBeVisible();
        await dashboardPage.logoutBtn.click();

        // Verify back on login page
        await expect(page).toHaveURL(/login/i);
    });

});