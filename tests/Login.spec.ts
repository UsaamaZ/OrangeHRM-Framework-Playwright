import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
// import users from '../test-data/users.json';

test('Valid Login', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);

  // await loginPage.login(
  //   users.validUser.username,
  //   users.validUser.password
  // );

  await expect(page).toHaveURL(/dashboard/);
});