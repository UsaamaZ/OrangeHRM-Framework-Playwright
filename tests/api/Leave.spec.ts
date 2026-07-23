// import { test, expect } from "../../src/fixtures/api.fixture";
// import { AllureHelper } from "../../src/utils/allure/allureHelper";
// import { Severity } from "allure-js-commons";
// import { LeaveApi } from "../../src/api/services/leave.api";
// import { ApiClient } from "../../src/api/client/ApiClient";

// test("Get Leave Requests", async ({ leaveApi }) => {

//     await AllureHelper.addMetadata(

//         "API",
//         "Leave",
//         "Retrieve Leave Requests",
//         Severity.CRITICAL,
//         "Usama Zaheer Butt",
//         ["API", "Smoke"]

//     );

//     const response = await leaveApi.getLeaveRequests();

//     expect(response.data.length).toBeGreaterThan(0);

// });