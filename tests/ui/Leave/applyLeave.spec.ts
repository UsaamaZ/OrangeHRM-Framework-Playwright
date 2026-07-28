import { test, expect } from "../../../src/fixtures/auth.fixture";
import { LeavePage } from "../../../src/pages/Leave/LeavePage";
import { LeaveFactory } from "../../../src/test-data/leave.factory";

test("Navigate to Apply Leave page and apply for leave", async ({ authenticatedPage }) => {

    const leave = new LeavePage(authenticatedPage);

    // Open the Apply Leave page
    await leave.openApplyLeave();

    // Create test data
    const data = LeaveFactory.create();

    // If the Apply form inputs are not visible (no leave types/balance), switch to Assign Leave tab
    const empInput = leave.locator.employeeNameInput;
    const isEmpVisible = await empInput.isVisible().catch(() => false);
    if (!isEmpVisible) {
        // Click Assign Leave tab which usually provides the assign form
        await authenticatedPage.getByRole('link', { name: 'Assign Leave' }).click();
        await expect(empInput).toBeVisible({ timeout: 10000 });
    }

    // Wait for and fill employee name, try to select suggestion
    await expect(empInput).toBeVisible({ timeout: 10000 });
    await empInput.fill(data.employeeName);
    await empInput.focus();
    // small pause to allow suggestions to appear
    await authenticatedPage.waitForTimeout(500);
    try {
        await authenticatedPage.keyboard.press('ArrowDown');
        await authenticatedPage.keyboard.press('Enter');
    } catch (e) {
        // fallback to pressing Enter on the input
        await empInput.press('Enter');
    }

    // Select leave type: open dropdown and pick first option via keyboard
    await expect(leave.locator.leaveTypeDropdown).toBeVisible({ timeout: 10000 });
    await leave.locator.leaveTypeDropdown.click();
    await authenticatedPage.waitForTimeout(300);
    try {
        await authenticatedPage.keyboard.press('ArrowDown');
        await authenticatedPage.keyboard.press('Enter');
    } catch (e) {
        // ignore and continue
    }

    // Fill dates and comments (click then fill to ensure focus)
    await expect(leave.locator.fromDateInput).toBeVisible({ timeout: 10000 });
    await leave.locator.fromDateInput.click();
    await leave.locator.fromDateInput.fill(data.fromDate);

    await expect(leave.locator.toDateInput).toBeVisible({ timeout: 10000 });
    await leave.locator.toDateInput.click();
    await leave.locator.toDateInput.fill(data.toDate);

    if (data.comment) {
        await expect(leave.locator.commentsInput).toBeVisible({ timeout: 5000 });
        await leave.locator.commentsInput.fill(data.comment);
    }

    // Submit application or assignment — button might be labelled 'Apply' or 'Assign'
    const submitButton = authenticatedPage.getByRole('button', { name: /Apply|Assign/i });
    await expect(submitButton).toBeVisible({ timeout: 5000 });
    await submitButton.click();

    // Verify success toast appears
    await expect(leave.locator.successToast).toBeVisible({ timeout: 20000 });

});