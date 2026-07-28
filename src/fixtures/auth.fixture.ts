import { test as base, expect, Page } from '@playwright/test';
import path from 'path';
import { ENV } from '../config/env';

export const test = base.extend<{
    authenticatedPage: Page;
}>({
    authenticatedPage: async ({ browser }, use) => {

        const context = await browser.newContext({
            storageState: path.resolve(ENV.authStatePath),
        });


        const page = await context.newPage();

        await use(page);

        await context.close();
    },
});

export { expect };