import { test as base, expect, APIRequestContext } from "@playwright/test";
import path from "path";
import { EmployeeApi } from "../api/sercives/EmployeeApi";
import { LeaveApi } from "../api/sercives/LeaveApi";
import { ENV } from "../config/env";


export const test = base.extend<{

    apiRequest: APIRequestContext;
    employeeApi: EmployeeApi;
    leaveApi: LeaveApi;

}>({

    apiRequest: async ({ browser }, use) => {

        const context = await browser.newContext({
            storageState: path.resolve(ENV.authStatePath)
        });

        await use(context.request);

        await context.close();

    },

    employeeApi: async ({ apiRequest }, use) => {

        await use(
            new EmployeeApi(apiRequest)
        );
    },

    leaveApi: async ({ apiRequest }, use) => {
        await use(
            new LeaveApi(apiRequest)
        );
    }
});

export { expect };