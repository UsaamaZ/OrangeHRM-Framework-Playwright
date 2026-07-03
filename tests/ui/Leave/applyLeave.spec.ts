import { test } from "../../../src/fixture/authFixture";
import { LeavePage } from "../../../src/pages/Leave/LeavePage";

test("Navigate to Apply Leave page", async ({ authenticatedPage }) => {

    const leave = new LeavePage(authenticatedPage);

    await leave.openApplyLeave();

});