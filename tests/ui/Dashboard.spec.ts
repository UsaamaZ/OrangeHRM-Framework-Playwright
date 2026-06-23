import { test, expect } from '@playwright/test';

test('Dashboard Page', async ({ page }) => {

    await page.goto('/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/dashboard/);
});