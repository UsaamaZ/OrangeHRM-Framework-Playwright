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

test.afterEach(async ({ authenticatedPage }, testInfo) => {

    const testFailedUnexpectedly =
        testInfo.status !== testInfo.expectedStatus;

    if (testFailedUnexpectedly) {

        if (!authenticatedPage.isClosed()) {

            const screenshot = await authenticatedPage.screenshot({
                fullPage: true,
                animations: "disabled",
            });

            await testInfo.attach("Failure Screenshot", {
                body: screenshot,
                contentType: "image/png",
            });

        }
    }
});

export { expect };