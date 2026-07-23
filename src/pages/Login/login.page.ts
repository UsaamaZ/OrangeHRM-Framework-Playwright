import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    page: Page;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async navigate(): Promise<void> {
        await this.page.goto("/web/index.php/auth/login");
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifySuccessfulLogin(): Promise<void> {
        await expect(this.page).toHaveURL(/dashboard/);
    }
}