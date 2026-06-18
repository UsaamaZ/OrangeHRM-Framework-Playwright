import { Page } from '@playwright/test'

export class DashboardPage {
    constructor(private page: Page) { }

    get dashboardHeading() {
        return this.page.getByText(/Dashboard/i);
    }
}