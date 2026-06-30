import { test as base, expect } from "@playwright/test";
import path from "path";
import { EmployeeApi } from "../../src/api/sercives/EmployeeApi";

export const test = base.extend<{
    employeeApi: EmployeeApi;
}>({

    employeeApi: async ({ browser }, use) => {
        const context = await browser.newContext({
            storageState: path.resolve("auth/admin.json")
        });
        await use(
            new EmployeeApi(context.request)
        );
        await context.close();
    }
});
export { expect };