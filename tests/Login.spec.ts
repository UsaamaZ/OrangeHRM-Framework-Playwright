import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import users from '../test-data/users.json';

test('Valid Login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    users.admin.username,
    users.admin.password
  );

  await expect(page).toHaveURL(/dashboard/);
});