import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../src/pages/DashboardPage';

test.describe('Authentication flow', () => {

    test('logout after login', async ({ page }) => {

        await page.goto('/web/index.php/dashboard/index');

        const dashboardPage = new DashboardPage(page);

        await expect(page).toHaveURL(/dashboard/i);

        await dashboardPage.userDropdown.click();
        await expect(dashboardPage.logoutBtn).toBeVisible();
        await dashboardPage.logoutBtn.click();

        // Verify back on login page
        await expect(page).toHaveURL(/login/i);
    });

});