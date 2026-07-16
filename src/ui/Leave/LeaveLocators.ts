import { Page } from "@playwright/test";

export class LeaveLocators {

    constructor(private page: Page) {}

    get leaveMenu() {
        return this.page.getByRole('link', { name: 'Leave' });
    }

    get applyTab() {
        return this.page.getByRole('link', { name: 'Apply' });
    }

    get employeeNameInput() {
        return this.page.locator("input[placeholder='Type for hints...']");
    }

    get leaveTypeDropdown() {
        return this.page.locator(".oxd-select-text").first();
    }

    get fromDateInput() {
        return this.page.locator("input[placeholder='yyyy-dd-mm']").first();
    }

    get toDateInput() {
        return this.page.locator("input[placeholder='yyyy-dd-mm']").nth(1);
    }

    get commentsInput() {
        return this.page.locator("textarea");
    }

    get applyButton() {
        return this.page.getByRole('button', { name: 'Apply' });
    }

    get successToast() {
        return this.page.locator(".oxd-toast");
    }
}