import { test, expect } from "../../../src/fixtures/auth.fixture";
import { LeavePage } from "../../../src/pages/Leave/LeavePage";
import { LeaveFactory } from "../../../src/test-data/leave.factory";

test("Navigate to Apply Leave page and apply for leave", async ({ authenticatedPage }) => {

    const leave = new LeavePage(authenticatedPage);

    // Open the Apply Leave page
    await leave.openApplyLeave();

    // Create test data
    const data = LeaveFactory.create();

    // Fill employee name and choose suggestion (press Enter to accept)
    await leave.locator.employeeNameInput.fill(data.employeeName);
    await leave.locator.employeeNameInput.press('Enter');

    // Select leave type: open dropdown and pick first option via keyboard
    await leave.locator.leaveTypeDropdown.click();
    await authenticatedPage.keyboard.press('ArrowDown');
    await authenticatedPage.keyboard.press('Enter');

    // Fill dates and comments
    await leave.locator.fromDateInput.fill(data.fromDate);
    await leave.locator.toDateInput.fill(data.toDate);
    if (data.comment) await leave.locator.commentsInput.fill(data.comment);

    // Submit application
    await leave.locator.applyButton.click();

    // Verify success toast appears
    await expect(leave.locator.successToast).toBeVisible({ timeout: 10000 });

});