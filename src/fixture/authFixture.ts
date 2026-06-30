import { test as base, expect, Page } from '@playwright/test';
import path from 'path';
// import { AllureReporting } from '../utils/allure/allureReporting';


export const test = base.extend<{
    authenticatedPage: Page;
}>({
    authenticatedPage: async ({ browser }, use) => {

        const context = await browser.newContext({
            storageState: path.resolve("auth/admin.json"),
        });

        const page = await context.newPage();

        // AllureReporting.captureConsoleLogs(page);
        await use(page);

        await context.close();
    },
});

test.afterEach(async ({ authenticatedPage }, testInfo) => {

    const testFailedUnexpectedly =
        testInfo.status !== testInfo.expectedStatus;

    if (
        testFailedUnexpectedly &&
        !authenticatedPage.isClosed()
        //     ) 
    ) {

        //         // await AllureReporting.attachFailureArtifacts(
        //             authenticatedPage,
        //             testInfo
        //         );

    }

});

export { expect };