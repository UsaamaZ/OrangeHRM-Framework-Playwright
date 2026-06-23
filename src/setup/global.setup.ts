import { chromium } from '@playwright/test';
import path from 'path';
import { ENV } from '../config/env';
import { AuthService } from './auth.service';

async function globalSetup() {
    console.log('Starting authentication setup...');
    console.log('Base URL:', ENV.baseUrl);

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to home which should redirect to login if not authenticated
    await page.goto(ENV.baseUrl);
    console.log('Initial page URL:', page.url());

    const authService = new AuthService(page);
    await authService.login(ENV.username, ENV.password);

    const authPath = path.resolve(ENV.authStatePath);
    await authService.saveAuthState(authPath);
    console.log('Auth state saved to:', authPath);

    await browser.close();
    console.log('Setup complete - auth state ready for tests');
}

export default globalSetup;