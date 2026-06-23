import { chromium, expect } from '@playwright/test';
import 'dotenv/config';

async function globalSetup() {

    const browser = await chromium.launch();

    const page = await browser.newPage();

    await page.goto(
        'https://opensource-demo.orangehrmlive.com'
    );

    await page.getByPlaceholder('Username')
        .fill(process.env.ADMIN_USERNAME!);

    await page.getByPlaceholder('Password')
        .fill(process.env.ADMIN_PASSWORD!);

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    await expect(page)
        .toHaveURL(/dashboard/);

    await page.context().storageState({
        path: 'playwright/.auth/admin.json'
    });

    await browser.close();
}

export default globalSetup;