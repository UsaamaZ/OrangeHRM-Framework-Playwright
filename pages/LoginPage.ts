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

    async login(user: string, pass: string) {

        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();

    }
}