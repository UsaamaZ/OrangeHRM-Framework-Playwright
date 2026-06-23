import { Page } from '@playwright/test'

export class LoginPage {

    constructor(private page: Page) { }

    get username() {
        return this.page.getByPlaceholder(/email/i);
    }
    get password() {
        return this.page.getByPlaceholder(/password/i);
    }
    get loginBtn() {
        return this.page.getByRole('button', { name: /sign in/i });

    }
    // get errorMessage() {
    //     return this.page.locator('.oxd-alert.oxd-alert--error');

    // }
    get errorMessage() {
        return this.page.getByRole('alert', { name: /error/i });

    }
    async login(user: string, pass: string) {

        await this.username.pressSequentially(user, { delay: 50 });
        await this.password.pressSequentially(pass, { delay: 50 });
        await this.loginBtn.click();
    }
}