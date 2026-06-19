import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users'
import { DashboardPage } from '../pages/DashboardPage';


test.describe('Authentication flow', () => {

    test('logout after login', async ({ page }) => {
        await page.goto('/');

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.login(users.admin.userName, users.admin.password);

        await expect(page).toHaveURL(/dashboard/i);

        await dashboardPage.userDropdown.click();
        await expect(dashboardPage.logoutBtn).toBeVisible();
        await dashboardPage.logoutBtn.click();
        await expect(page).toHaveURL(/login/i);
    });

});