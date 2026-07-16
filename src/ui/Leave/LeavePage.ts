import { expect, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { LeaveLocators } from "./LeaveLocators";

export class LeavePage extends BasePage {

    readonly locator: LeaveLocators;

    constructor(page: Page) {
        super(page);

        this.locator = new LeaveLocators(page); 
    }

    async openApplyLeave() {

        await this.locator.leaveMenu.click();

        await this.locator.applyTab.click();

        await expect(this.locator.applyButton).toBeVisible();
    }

}