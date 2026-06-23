import { Page } from '@playwright/test';

export class AuthService {
    constructor(private page: Page) { }

    async login(username: string, password: string) {
        try {
            console.log('Current URL:', this.page.url());

            console.log('Waiting for login form to render');
            await this.page.waitForSelector('input[type="password"]', { timeout: 15000 });
            console.log('Login form detected');

            const allInputs = this.page.locator('input');
            const inputCount = await allInputs.count();
            console.log('Found', inputCount, 'input fields');

         
            const usernameField = allInputs.nth(1);
            const passwordField = allInputs.nth(2);

            await usernameField.waitFor({ state: 'visible', timeout: 10000 });
            await usernameField.fill(username);
            console.log('Username entered:', username);

            await passwordField.waitFor({ state: 'visible', timeout: 10000 });
            await passwordField.fill(password);
            console.log('Password entered');

            let loginButton = this.page.locator('button[type="submit"]');
            let buttonText = await loginButton.textContent();
            console.log('Found submit button:', buttonText);

            console.log('URL before button click:', this.page.url());
            await loginButton.click();
            console.log('Login button clicked');

            console.log('Waiting for navigation...');
            await Promise.race([
                this.page.waitForURL('dashboard', { timeout: 10000 }).catch(() => null),
                this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => null)
            ]);

            console.log('URL after navigation:', this.page.url());
            console.log('Login successful - URL:', this.page.url());

        } catch (error) {
            console.error('Login failed:', error);
            console.error('Final URL:', this.page.url());
            throw error;
        }
    }

    async saveAuthState(filePath: string) {
        await this.page.context().storageState({ path: filePath });
    }
}