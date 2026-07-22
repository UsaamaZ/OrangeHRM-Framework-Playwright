import { test as authTest, expect } from "./auth.fixture";
import { EmployeeApi } from "../api/services/employee.api";
import { LeaveApi } from "../api/services/leave.api";
import { APIRequestContext } from "@playwright/test";
import path from "path";
import { ENV } from "../config/env";

export const test = authTest.extend<{

    apiRequest: APIRequestContext;
    employeeApi: EmployeeApi;
    leaveApi: LeaveApi;

}>({

    apiRequest: async ({ browser }, use) => {

        const context = await browser.newContext({
            storageState: path.resolve(ENV.authStatePath),
        });

        await use(context.request);

        await context.close();

    },

    employeeApi: async ({ apiRequest }, use) => {

        await use(new EmployeeApi(apiRequest));

    },

    leaveApi: async ({ apiRequest }, use) => {

        await use(new LeaveApi(apiRequest));

    }

});

export { expect };