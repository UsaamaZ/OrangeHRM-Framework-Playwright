import { expect, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { LeaveLocators } from "./leave.locators";

export class LeavePage extends BasePage {

    readonly locator: LeaveLocators;

    constructor(page: Page) {
        super(page);

        this.locator = new LeaveLocators(page); 
    }

    async openApplyLeave() {

        // Try navigating via the sidebar first; if the menu isn't present, fall back to direct navigation
        try {
            // Ensure the Leave menu is visible before interacting
            await expect(this.locator.leaveMenu).toBeVisible({ timeout: 10000 });
            await this.locator.leaveMenu.click();

            // Wait for the Apply tab to appear and click it
            await expect(this.locator.applyTab).toBeVisible({ timeout: 10000 });
            await this.locator.applyTab.click();

        } catch (err) {
            // Fallback: navigate directly to the Apply Leave URL used by OrangeHRM
            await this.page.goto('/web/index.php/leave/applyLeave');
        }

        // Verify the Apply button is visible on the Apply Leave page
        await expect(this.locator.applyButton).toBeVisible({ timeout: 10000 });
    }

}