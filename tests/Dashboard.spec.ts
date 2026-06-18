import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

for (const data of loginData) {

    test(data.testName, async ({ page }) => {

        await page.goto('/');
        const loginPage = new LoginPage(page);

        await loginPage.login(
            data.userName,
            data.password
        );
        if (data.isValidUser) {
            await expect(page).toHaveURL(/dashboard/);
        } else {
            await expect(loginPage.errorMessage).toBeVisible();
        }
    });
}