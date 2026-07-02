import { test as base, expect, Page } from '@playwright/test';
import path from 'path';

export const test = base.extend<{
    authenticatedPage: Page;
}>({
    authenticatedPage: async ({ browser }, use) => {

        const context = await browser.newContext({
            storageState: path.resolve("auth/admin.json"),
        });

        const page = await context.newPage();

        await use(page);

        await context.close();
    },
});

export { expect };