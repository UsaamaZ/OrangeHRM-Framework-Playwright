import { test as base, Page } from '@playwright/test';
import { AuthService } from '../setup/auth.service';
import { ENV } from '../config/env';

export const test = base.extend<{ authenticatedPage: Page }>({
    authenticatedPage: async ({ page, context }, use) => {
        try {
            const authService = new AuthService(page);
            await page.goto(ENV.baseUrl);

            await page.goto('/web/index.php/dashboard/index');

            const url = page.url();
            if (url.includes('/auth/login')) {
                await authService.login(ENV.username, ENV.password);
            }
        } catch (error) {
            console.log('Authentication check failed, attempting login');
            const authService = new AuthService(page);
            await authService.login(ENV.username, ENV.password);
        }

        await use(page);
    },
});

export { expect } from '@playwright/test';
