import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { ENV } from './src/config/env';

// Resolve the absolute path to auth state file
const authStatePath = path.resolve(process.cwd(), ENV.authStatePath);

export default defineConfig({
  testDir: './tests',

  globalSetup: require.resolve('./src/setup/global.setup.ts'),

  fullyParallel: false,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,

  timeout: ENV.defaultTimeout,

  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  use: {
    baseURL: ENV.baseUrl,

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: ENV.defaultTimeout,
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['chromium'],

        viewport: null,

        launchOptions: {
          headless: false,
          // slowMo: 500,
          args: ['--start-maximized']
        },

        // Load storage state if file exists
        storageState: fs.existsSync(authStatePath) ? authStatePath : undefined,
      },
    },
  ],
});