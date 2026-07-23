import { test } from "../../../src/fixtures/auth.fixture";
import { LeavePage } from "../../../src/pages/Leave/leave.page";

test("Navigate to Apply Leave page", async ({ authenticatedPage }) => {

    const leave = new LeavePage(authenticatedPage);

    await leave.openApplyLeave();

});