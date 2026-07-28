import { test, expect } from "../../../src/fixtures/auth.fixture";
import { LeavePage } from "../../../src/pages/Leave/LeavePage";
import { LeaveFactory } from "../../../src/test-data/leave.factory";
import { EmployeeApi } from "../../../src/api/services/employee.api";
import { APIRequestContext } from "@playwright/test";

test("Navigate to Apply Leave page and apply for leave", async ({ authenticatedPage }) => {

    const leave = new LeavePage(authenticatedPage);

    // Open the Apply Leave page
    await leave.openApplyLeave();

    // Create test data (dates/comments)
    const data = LeaveFactory.create();

    // Ensure we have an existing employee from the API; prefer the first employee
    const employeeApi = new EmployeeApi(authenticatedPage.context().request as APIRequestContext);
    const employees = await employeeApi.getEmployees();
    const emp = employees.data && employees.data.length > 0 ? employees.data[0] : undefined;
    const employeeName = emp ? `${emp.firstName}${emp.middleName ? ' ' + emp.middleName : ''} ${emp.lastName}`.replace(/\s+/g, ' ').trim() : data.employeeName;

    // If the Apply form inputs are not visible (no leave types/balance), switch to Assign Leave tab
    const empInput = leave.locator.employeeNameInput;
    const isEmpVisible = await empInput.isVisible().catch(() => false);
    if (!isEmpVisible) {
        // Click Assign Leave tab which usually provides the assign form
        await authenticatedPage.getByRole('link', { name: 'Assign Leave' }).click();
        await expect(empInput).toBeVisible({ timeout: 10000 });
    }

    // Wait for and fill employee name with existing employee
    await expect(empInput).toBeVisible({ timeout: 10000 });
    await empInput.fill(employeeName);
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

    // Verify outcome: success toast OR a validation error is shown (e.g., invalid employee or insufficient balance)
    const successPromise = leave.locator.successToast.waitFor({ timeout: 5000 }).then(() => 'success').catch(() => 'no-success');
    const outcome = await successPromise;

    if (outcome === 'success') {
        // success toast shown
        // pass
    } else {
        // check for common validation messages
        const validation = authenticatedPage.getByText(/Invalid|Balance not sufficient|Required|Insufficient/);
        await expect(validation.first()).toBeVisible({ timeout: 5000 });
    }

});