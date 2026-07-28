import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { ENV } from './src/config/env';

// Resolve the absolute path to auth state file
const authStatePath = path.resolve(process.cwd(), ENV.authStatePath);

export default defineConfig({
  testDir: './',

  globalSetup: require.resolve('./src/setup/global.setup.ts'),

  fullyParallel: false,

  forbidOnly: !!process.env.CI,
  retries: ENV.retries,
  workers: ENV.workers,

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
    
    // Login tests without storage state
    {
      name: "login",

      testMatch: /tests\/auth\/.*\.spec\.ts/,

      use: {
        browserName: "chromium",

        viewport: null,

        launchOptions: {
          headless: ENV.headless,
          slowMo: 500,
          args: ["--start-maximized"],
        },

        storageState: undefined,
      },
    },

    // Remaining tests with storage state
    {
      name: 'chromium',

      testIgnore: /tests\/auth\/.*\.spec\.ts/,

      use: {
        // ...devices['Desktop Chrome'],

        viewport: null,

        launchOptions: {
          headless: ENV.headless,
          slowMo: 500,
          args: ['--start-maximized'],
        },

        storageState: fs.existsSync(authStatePath)
          ? authStatePath
          : undefined,
      },
    },
  ],
});