import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { ENV } from '../config/env';
import { AuthService } from './auth.service';

async function globalSetup() {
    console.log('Starting authentication setup...');
    console.log('Base URL:', ENV.baseUrl);

    const authPath = path.resolve(ENV.authStatePath);
    if (fs.existsSync(authPath)) {
        console.log('Auth state already exists at', authPath, '- skipping global setup.');
        return;
    }

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to home which should redirect to login if not authenticated
    await page.goto(ENV.baseUrl, {
        waitUntil: 'domcontentloaded',
        timeout: ENV.defaultTimeout,
    });
    console.log('Initial page URL:', page.url());
    await page.waitForLoadState('networkidle', { timeout: ENV.defaultTimeout }).catch(() => null);

    const authService = new AuthService(page);
    await authService.login(ENV.username, ENV.password);

    await authService.saveAuthState(authPath);
    console.log('Auth state saved to:', authPath);

    await browser.close();
    console.log('Setup complete - auth state ready for tests');
}

export default globalSetup;