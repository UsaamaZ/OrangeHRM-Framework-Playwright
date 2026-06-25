import { Page } from '@playwright/test'

export class DashboardPage {
    constructor(private page: Page) { }

    get userDropdown() {
        return this.page.locator('.oxd-userdropdown-tab');
    }
    get logoutBtn() {
        return this.page.locator('.oxd-userdropdown-link', { hasText: /logout/i });
    }
}