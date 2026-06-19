import { Page } from '@playwright/test'

export class LoginPage {

    constructor(private page: Page) { }

    get username() {
        return this.page.getByPlaceholder("Username");
    }
    get password() {
        return this.page.getByPlaceholder("Password");
    }
    get loginBtn() {
        return this.page.getByRole('button', { name: /login/i });

    }

    get errorMessage() {
        return this.page.locator('.oxd-alert.oxd-alert--error');
    }

    async login(user: string, pass: string) {

        await this.username.pressSequentially(user, { delay: 100 });
        await this.password.pressSequentially(pass, { delay: 100 });
        await this.loginBtn.click();
    }
}